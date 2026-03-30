from pathlib import Path

from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.http import require_GET
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def health(request):
    return Response({"status": "ok"})


@require_GET
def frontend(request):
    index_file = Path(settings.BASE_DIR) / "frontend_build" / "index.html"

    if not index_file.exists():
        return HttpResponse(
            "Frontend build not found. Run `npm run build` in /frontend.",
            status=501,
        )

    return HttpResponse(index_file.read_text(encoding="utf-8"))
