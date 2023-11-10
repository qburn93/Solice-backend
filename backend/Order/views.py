from django.shortcuts import render
from .models import SolarPanel, Order

def order_view(request):
    orders = Order.objects.all()
    return render(request, 'order.html', {'orders': orders})

def solar_panel_view(request):
    solar_panels = SolarPanel.objects.all()
    return render(request, 'solar_panel.html', {'solar_panels': solar_panels})
