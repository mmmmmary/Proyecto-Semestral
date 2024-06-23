from django.urls import path
from .views import home, nosotros, galeria

urlpatterns = [
    path('', home, name="home"),
    path('nosotros/',nosotros, name="nosotros"),
    path('galeria/',galeria, name="galeria" )
]
