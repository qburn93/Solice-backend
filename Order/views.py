from django.shortcuts import render
from .models import SolarPanel, Order

def order_view(request):
    orders = Order.objects.all()
    return render(request, 'order.html', {'orders': orders})
