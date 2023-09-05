function fahrenheitConvert(value) {
    let celcius = document.getElementById('celcius')
    let kelvin = document.getElementById('kelvin')

    value = parseFloat(value)
    celcius.value = (value - 32) / 1.8
    kelvin.value = ((value - 32) / 1.8) + 273.15
}

function celciusConvert(value) {
    let fahrenheit = document.getElementById('fahrenheit')
    let kelvin = document.getElementById('kelvin')

    value = parseFloat(value)
    fahrenheit.value = (value * 1.8) + 32
    kelvin.value = value + 273.15
}

function kelvinConvert(value) {
    let fahrenheit = document.getElementById('fahrenheit')
    let celcius = document.getElementById('celcius')

    value = parseFloat(value)
    fahrenheit.value = ((value - 273.15) * 1.8) + 32
    celcius.value = value - 273.15
}