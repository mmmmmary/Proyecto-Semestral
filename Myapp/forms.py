from django import forms
from .models import Contacto, Obra

class ContactoForm(forms.ModelForm):

    class Meta:
        model = Contacto
        fields = '__all__'

class ObraForm(forms.ModelForm):

    class Meta:
        model = Obra
        fields = '__all__'