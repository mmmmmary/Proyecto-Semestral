from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('nosotros/',views.nosotros, name="nosotros"),
    path('galeria/',views.galeria, name="galeria" ),
    path('artistas/',views.artistas, name="artistas"),
    path('contacto/',views.contacto, name="contacto"),
    path('agregar-producto/', views.agregar_producto, name="agregar_producto"),
    path('listar-productos/',views.listar_productos, name="listar_productos"),
    path('modificar-productos/<id>/',views.modificar_productos, name="modificar_productos"),

]
