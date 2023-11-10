# Generated by Django 4.2.7 on 2023-11-10 02:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='SolarPanel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('Thin film', 'Thin film'), ('Monocrystalline', 'Monocrystalline'), ('Polycrystalline', 'Polycrystalline')], max_length=200)),
                ('image', models.ImageField(upload_to='solar_panels/')),
                ('square_meters', models.PositiveIntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField()),
                ('total_price', models.DecimalField(blank=True, decimal_places=2, max_digits=6)),
                ('order_date', models.DateTimeField(auto_now_add=True)),
                ('solar_panel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Order.solarpanel')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
