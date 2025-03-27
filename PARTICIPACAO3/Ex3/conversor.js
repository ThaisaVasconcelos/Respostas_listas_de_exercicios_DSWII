function quilogramaParaLibra(quilogramas){
    return `Quilogramas para Libras: ${quilogramas} kg = ${quilogramas * 2.20462} lb`;
};

function metroParaPe(metros){
    return `Metros para Pés: ${metros} m = ${metros * 3.28084} ft`;
};

function celsiusParaFahrenheit(celsius){
    return `Celsius para Fahrenheit: ${celsius}°C = ${(celsius * 9/5) + 32}°F` 
};

module.exports = {
    quilogramaParaLibra,
    metroParaPe,
    celsiusParaFahrenheit
};