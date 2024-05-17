document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '4f9dd43753400f080ec07dbab955a6ae'; // claveapii weather
    const ciudad = 'Viña del mar';
    const pais = 'CL';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data:', data); // Imprimir toda la respuesta para diagnóstico
            document.getElementById('temp').textContent = data.main.temp;
            document.getElementById('wind').textContent = data.wind.speed;
        })
        .catch(error => console.error('Error fetching data: ', error));
});




document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([-33.4372, -70.6506], 13); 
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    L.marker([-33.4372, -70.6506]).addTo(map) // Ccoorderandaschile
      .bindPopup('¡Ground Zero!').openPopup(); // Popup 
});




