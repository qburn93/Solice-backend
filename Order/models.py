from django.db import models
from django.contrib.auth.models import User

class SolarPanel(models.Model):
    TYPES = (
        ('Thin film', 'Thin film'),
        ('Monocrystalline', 'Monocrystalline'),
        ('Polycrystalline', 'Polycrystalline'),
    )
    name = models.CharField(max_length=200, choices=TYPES)
    description = models.TextField()
    image = models.ImageField(upload_to='solar_panels/')
    square_meters = models.PositiveIntegerField(default=0)

    def calculate_price(self):
        if self.name == 'Thin film':
            return self.square_meters * 100
        elif self.name == 'Monocrystalline':
            return self.square_meters * 50
        elif self.name == 'Polycrystalline':
            return self.square_meters * 70

    def __str__(self):
        return self.name

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    solar_panel = models.ForeignKey(SolarPanel, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    total_price = models.DecimalField(max_digits=6, decimal_places=2, blank=True)
    order_date = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.total_price = self.solar_panel.calculate_price() * self.quantity
        super().save(*args, **kwargs)

    def __str__(self):
        return f'Order {self.id}'