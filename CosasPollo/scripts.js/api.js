document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '4f9dd43753400f080ec07dbab955a6ae'; // Sustituye con tu clave de API real
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




