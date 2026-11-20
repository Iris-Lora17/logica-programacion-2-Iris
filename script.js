//funcion para obtener el valor de la temperatura en grados Celsius
function obtenerTemperatura() {
    //obtenerla temperatura en grados Celsius desde el input del usuario
    let temperatura = document.getElementById("numCelsius").value;

    if (temperatura === "" || isNaN(temperatura)) {
        document.getElementById("resultado").innerHTML = "Ingresa un número válido.";
    }else {
        temperatura = Number(temperatura);
        let fahrenheit = (temperatura * 9 / 5) + 32;
        let kelvin = temperatura + 273.15;
        document.getElementById("resultado").innerHTML = "grados Fahrenheit: " + fahrenheit + "<br> grados Kelvin: " + kelvin;
    }
    
}