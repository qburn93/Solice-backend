from rest_framework.views import APIView
from rest_framework.response import Response
from Order.models import SolarPanel, Order
from Order.serializers import SolarPanelSerializer, OrderSerializer

class OrderView(APIView):
    def get(self, request):
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

class SolarPanelView(APIView):
    def get(self, request):
        solar_panels = SolarPanel.objects.all()
        serializer = SolarPanelSerializer(solar_panels, many=True)
        return Response(serializer.data)