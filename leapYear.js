//Write a function that tells if provoided year is a leap year or not.

//example 1
function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }   
    return false;
}

console.log(isLeapYear(2022));
console.log(isLeapYear(2023));
console.log(isLeapYear(2024));
console.log(isLeapYear(2025));

//example 2
function isLeapYear2(year){
    return year % 4 === 0;
}

console.log(isLeapYear(2022));
console.log(isLeapYear(2023));
console.log(isLeapYear(2024));
console.log(isLeapYear(2025));