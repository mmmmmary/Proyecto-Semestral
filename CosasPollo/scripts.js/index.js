

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function(event) {
      if (!validateForm()) {
        event.preventDefault(); // Prevenir el envío si hay errores
      }
    });
  
    function validateForm() {
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();
      
      let valid = true;
  
      // Validación del nombre (solo letras)
      if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert('El nombre solo debe contener letras.');
        valid = false;
      }
  
      // Validación del teléfono (+56 9 xxxx xxxx)
      if (!/^\+56 9 \d{4} \d{4}$/.test(phone)) {
        alert('El teléfono debe estar en el formato +56 9 xxxx xxxx.');
        valid = false;
      }
  
      // Validación del mensaje (no vacío)
      if (message === '') {
        alert('El mensaje no debe estar vacío.');
        valid = false;
      }
  
      return valid;
    }
  });
  