from django.contrib import admin
from drf_api.views import OrderView, SolarPanelView
from django.urls import path, include

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('orders/', OrderView.as_view()),
    path('solar_panels/', SolarPanelView.as_view()),
]