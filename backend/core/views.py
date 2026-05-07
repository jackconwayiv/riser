from pathlib import Path
import re
import time

from django.conf import settings
from django.core.exceptions import ValidationError
from django.core.mail import EmailMessage
from django.core.validators import validate_email
from django.http import HttpResponse
from django.views.decorators.http import require_GET
from rest_framework import status
from rest_framework.decorators import api_view, throttle_classes
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle

URL_RE = re.compile(r"https?://", re.IGNORECASE)
LETTER_RE = re.compile(r"[^\W\d_]", re.UNICODE)


class ContactThrottle(AnonRateThrottle):
    scope = "contact"


def _validate_contact_payload(data):
    errors = {}

    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    message = (data.get("message") or "").strip()
    mounted_at = data.get("mountedAt")

    if not (2 <= len(name) <= 100):
        errors["name"] = "Name must be between 2 and 100 characters."
    elif not LETTER_RE.search(name) or "<" in name or ">" in name:
        errors["name"] = "Please enter a valid name."

    if len(email) > 254:
        errors["email"] = "Email is too long."
    elif "\r" in email or "\n" in email:
        errors["email"] = "Please enter a valid email address."
    else:
        try:
            validate_email(email)
        except ValidationError:
            errors["email"] = "Please enter a valid email address."

    if not (10 <= len(message) <= 5000):
        errors["message"] = "Message must be between 10 and 5000 characters."
    elif len(URL_RE.findall(message)) > 3:
        errors["message"] = "Too many links in message."

    try:
        delta_ms = int(time.time() * 1000) - int(mounted_at)
        if not (2000 <= delta_ms <= 24 * 60 * 60 * 1000):
            errors["form"] = "Form submitted too quickly."
    except (TypeError, ValueError):
        errors["form"] = "Form submitted too quickly."

    return name, email, message, errors


@api_view(["GET"])
def health(request):
    return Response({"status": "ok"})


@api_view(["POST"])
@throttle_classes([ContactThrottle])
def contact(request):
    if request.data.get("website"):
        return Response(status=status.HTTP_202_ACCEPTED)

    name, email, message, errors = _validate_contact_payload(request.data)
    if errors:
        return Response({"errors": errors}, status=status.HTTP_400_BAD_REQUEST)

    body = (
        "A new message was submitted via The Riser contact form.\n\n"
        f"Name:  {name}\n"
        f"Email: {email}\n\n"
        "------------------------------------------------------------\n"
        f"{message}\n"
        "------------------------------------------------------------\n\n"
        f"Reply directly to this email to respond to {name}."
    )

    EmailMessage(
        subject=f"[The Riser] New contact form submission from {name}",
        body=body,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[settings.CONTACT_RECIPIENT_EMAIL],
        reply_to=[email],
    ).send(fail_silently=False)

    return Response(status=status.HTTP_202_ACCEPTED)


@require_GET
def frontend(request):
    index_file = Path(settings.BASE_DIR) / "frontend_build" / "index.html"

    if not index_file.exists():
        return HttpResponse(
            "Frontend build not found. Run `npm run build` in /frontend.",
            status=501,
        )

    return HttpResponse(index_file.read_text(encoding="utf-8"))
