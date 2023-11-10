from rest_framework import viewsets
from Order.models import SolarPanel, Order
from Order.serializers import SolarPanelSerializer, OrderSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class SolarPanelViewSet(viewsets.ModelViewSet):
    queryset = SolarPanel.objects.all()
    serializer_class = SolarPanelSerializer