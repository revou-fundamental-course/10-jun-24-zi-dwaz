document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input value
    let celsius = parseFloat(document.getElementById('temperatureInput').value);

    // Validate input
    if (isNaN(celsius)) {
        alert('Masukkan suhu dalam angka!');
        return;
    }

    // Calculate Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;

    // Display results
    document.getElementById('conversionResult').textContent = `${celsius} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit`;
    document.getElementById('explanation').textContent = `Formula: (${celsius} × 9/5) + 32`;

    // Show result container
    document.getElementById('resultContainer').style.display = 'block';
});
