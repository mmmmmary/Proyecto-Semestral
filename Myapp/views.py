from django.shortcuts import render
from .forms import ContactoForm

# Create your views here.
def home(request):
    return render(request, 'Myapp/home.html')
def nosotros(request):
    return render(request, 'Myapp/Nosotros.html')
def galeria(request):
    return render(request, 'Myapp/galeria.html')
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