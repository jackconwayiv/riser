from core.views import frontend, robots_txt, sitemap_xml
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("core.urls")),
    path("robots.txt", robots_txt),
    path("sitemap.xml", sitemap_xml),
    re_path(r"^(?!static/|media/|api/|admin/).*$", frontend, name="frontend"),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
