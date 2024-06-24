from django.contrib import admin
from .models import Genero, Cliente, Artista, Contacto
# Register your models here.
admin.site.register(Genero)
admin.site.register(Cliente)
admin.site.register(Artista)
admin.site.register(Contacto)