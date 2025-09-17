//Write a program that checks if a number is armstrong or not?
/*Input: A number
Output: True/False
Armstong: It's a number that is equal to the sum of ite own digits raised to the power of number of digits
ex: 153 = 1^3+5^3+3^3 = 3+125+27 = 153 (True)*/


//One method
function isArmstrongNumber(inputNumber){

    if(isNaN(inputNumber) || inputNumber<0){
        throw new Error("Invalid input! only positive integers are allowed")
    }

    console.log(inputNumber);
    let splitNumber = inputNumber.toString().split("").map(Number);
    console.log(splitNumber);
    let newNumber;
    let sum = 0;
    for(let i=0; i<splitNumber.length; i++){
        newNumber = splitNumber[i] ** splitNumber.length;
        console.log(`${splitNumber[i]} ** ${splitNumber.length} = ${newNumber}`);
        sum += newNumber;
    }
    console.log(sum);

    return sum === inputNumber;
}

console.log(`The number 153 is armstrong number: ${isArmstrongNumber(153)}`);
console.log(`The number 132 is armstrong number: ${isArmstrongNumber(132)}`);
// console.log(`The number "abc" is armstrong number: ${isArmstrongNumber("abc")}`);
// console.log(`The number -132 is armstrong number: ${isArmstrongNumber(-132)}`);

//another method

function isArmstrongNumber2(inputNumber){
        if(isNaN(inputNumber) || inputNumber<0){
        throw new Error("Invalid input! only positive integers are allowed")
    }

    let number = inputNumber;
    const digits = [];

    while(number > 0){
        let lastDigit = number % 10;
        number = Math.floor(number/10);
        digits.push(lastDigit);
    }

    const length = digits.length;
    console.log("Length is", length);
    let sum = 0;
    digits.forEach(d =>{
        sum += Math.pow(d,length);
    });
    return sum === inputNumber;
}

console.log(`The number 153 is armstrong number: ${isArmstrongNumber2(153)}`);
console.log(`The number 132 is armstrong number: ${isArmstrongNumber2(132)}`);