from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from your_app_name import consumers

application = ProtocolTypeRouter({
    "websocket": URLRouter([
        path("ws/some_path/", consumers.YourConsumer.as_asgi()),
    ]),
})