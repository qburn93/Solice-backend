# Generated by Django 4.2.7 on 2023-11-10 01:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Order', '0001_initial'),
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='orders',
            field=models.ManyToManyField(blank=True, to='Order.order'),
        ),
    ]
