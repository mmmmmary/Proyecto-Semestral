from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'Myapp/home.html')
def nosotros(request):
    return render(request, 'Myapp/Nosotros.html')
def galeria(request):
    return render(request, 'Myapp/galeria.html')
def artistas(request):
    return render(request, 'Myapp/artistas.html')