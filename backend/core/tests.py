from unittest.mock import patch

from django.core import mail
from django.test import TestCase, override_settings
from rest_framework.test import APIClient


class ContactEndpointTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.valid_payload = {
            "name": "Test User",
            "email": "test@example.com",
            "message": "This is a valid test message.",
            "website": "",
            "mountedAt": 1_700_000_000_000,
        }

    @override_settings(
        DEFAULT_FROM_EMAIL="noreply@yourdomain.com",
        CONTACT_RECIPIENT_EMAIL="you@yourdomain.com",
    )
    @patch("core.views.time.time", return_value=1_700_000_003)
    def test_contact_sends_email(self, _mock_time):
        with patch.object(mail.EmailMessage, "send", return_value=1) as send_mock:
            response = self.client.post("/api/contact/", self.valid_payload, format="json")

        self.assertEqual(response.status_code, 202)
        send_mock.assert_called_once()

    @patch("core.views.time.time", return_value=1_700_000_003)
    def test_contact_honeypot_returns_202_without_sending(self, _mock_time):
        payload = {**self.valid_payload, "website": "https://spam.example"}
        with patch.object(mail.EmailMessage, "send") as send_mock:
            response = self.client.post("/api/contact/", payload, format="json")

        self.assertEqual(response.status_code, 202)
        send_mock.assert_not_called()

    @patch("core.views.time.time", return_value=1_700_000_000)
    def test_contact_rejects_fast_submit(self, _mock_time):
        response = self.client.post("/api/contact/", self.valid_payload, format="json")

        self.assertEqual(response.status_code, 400)
        self.assertIn("form", response.json()["errors"])
