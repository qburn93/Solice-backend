from rest_framework import serializers
from .models import SolarPanel, Order
from profiles.models import Profile

class SolarPanelSerializer(serializers.ModelSerializer):
    class Meta:
        model = SolarPanel
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'