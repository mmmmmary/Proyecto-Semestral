from django.shortcuts import render, redirect, get_object_or_404
from .forms import ContactoForm, ObraForm
from .models import Obra

# Create your views here.
def home(request):
    return render(request, 'Myapp/home.html')

def nosotros(request):
    return render(request, 'Myapp/Nosotros.html')

def galeria(request):
    obra = Obra.objects.all()
    data = {
        'obra': obra
    }
    return render(request, 'Myapp/galeria.html', data)

def artistas(request):
    return render(request, 'Myapp/artistas.html')

def contacto(request):
    data = {
        'form': ContactoForm()
    }

    if request.method == 'POST':
        formulario = ContactoForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "Contacto Enviado"
        else:
            data["form"] = formulario 

    return render(request, 'Myapp/contacto.html', data)

def agregar_producto(request):

    data = {
        'form' : ObraForm()
    }

    if request.method == 'POST':
        formulario = ObraForm(data=request.POST, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "Obra Agregada"
        else:
            data["form"] = formulario

    return render(request, 'Myapp/obras/agregar.html', data)

def listar_productos(request):

    obras = Obra.objects.all()

    data = {

        'obras': obras
    }
    
    return render(request, 'Myapp/obras/listar.html', data)

def modificar_productos(request, id):

    obra = get_object_or_404(Obra, id=id)

    data = {

        'form' :ObraForm(instance=obra)
    }

    if request.method == 'POST':
        formulario = ObraForm(data=request.POST, instance=obra, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            return redirect(to=listar_productos)
        else:
            data["form"] = formulario

    return render(request, 'Myapp/obras/modificar.html' )