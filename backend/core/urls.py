from django.urls import path

from .views import contact, health

urlpatterns = [
    path("health/", health, name="health"),
    path("contact/", contact, name="contact"),
]
