from django.urls import path
from .views import order_view, solar_panel_view

urlpatterns = [
    path('orders/', order_view),
    path('solar_panels/', solar_panel_view),
]