from django.db import models

class SolarPanel(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to='solar_panels/')

    def __str__(self):
        return self.name