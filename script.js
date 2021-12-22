const celcius = document.querySelector("#celcius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");
console.log(celcius)

function celciusToFahrenheitAndKelvin(){
  const celciusVal = parseFloat(celcius.value);
  const fahrenheitVal = (celciusVal*9/5)+32;
  const kelvinVal = celciusVal+273.15;
  fahrenheit.value = fahrenheitVal;
  kelvin.value = kelvinVal;
}

function fahrenheitToCelciusAndKelvin(){
  const fahrenheitVal = parseFloat(fahrenheit.value);
  const celciusVal = (fahrenheitVal-32)*5/9;
  const kelvinVal = (fahrenheitVal-32)*5/9+273.15;
  celcius.value = celciusVal;
  kelvin.value = kelvinVal;
}

function kelvinToFahrenheitAndCelcius(){
  const kelvinVal = parseFloat(kelvin.value);
  const fahrenheitVal = kelvinVal-273.15;
  const celciusVal = (kelvinVal-273.15)*9/5+32;
  fahrenheit.value = fahrenheitVal;
  celcius.value = celciusVal;
}

function main(){
  celcius.addEventListener('input', celciusToFahrenheitAndKelvin);
  fahrenheit.addEventListener('input', fahrenheitToCelciusAndKelvin);
  kelvin.addEventListener('input', kelvinToFahrenheitAndCelcius);
}
main();

function reset(){
    document.getElementById("celcius").reset();
    document.getElementById("fahrenheit").reset();
    document.getElementById("kelvin").reset();
}
