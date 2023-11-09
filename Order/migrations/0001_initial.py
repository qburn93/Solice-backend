# Generated by Django 4.2.7 on 2023-11-09 17:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('SolarPanel', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField()),
                ('total_price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('order_date', models.DateTimeField(auto_now_add=True)),
                ('solar_panel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='SolarPanel.solarpanel')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
