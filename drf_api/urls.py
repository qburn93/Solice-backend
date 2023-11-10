from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework import routers
from drf_api.views import OrderViewSet, SolarPanelViewSet

router = routers.DefaultRouter()
router.register(r'orders', OrderViewSet)
router.register(r'solar_panels', SolarPanelViewSet)

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]