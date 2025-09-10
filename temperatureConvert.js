//Write a function that convert a temperature in celsius into fahrenheit
/*Input: temperature in celsius
Return: temperature in fahrenheit
formula: (temperature in celsius * 9/5)+32
example: 27degree=(27*9/5)+32*/

function convertToFahrenheit(temperature){
    if(isNaN(temperature)){
        throw new Error("Invalid input: Only numbers are allowed");
    }
    let result = (temperature * 9/5) + 32;
    result = Math.round(result);
    return result;
}

console.log("27 degree in Fahrenheit is:",convertToFahrenheit(27));
// console.log("add degree in Fahrenheit is:",convertToFahrenheit("add"));