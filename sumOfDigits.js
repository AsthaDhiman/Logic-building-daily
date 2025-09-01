//Write a function that calculates and print the sum of te digits of a given number.

//example 1
function calculateSum(number){
    if(number <1){
        throw new Error("Invalid input: Input number must be a positive number!");
    }

    const numberAsString = number.toString();
    console.log(numberAsString);
    const splittedString = numberAsString.split('');
    console.log(splittedString);
    let result = 0;
    splittedString.forEach(num => {
        result = result + parseInt(num);
        console.log(result);
    })
    return result;
}

console.log(`The sum of 12 is : ${calculateSum(12)}`);
console.log(`The sum of 456 is : ${calculateSum(456)}`);

//without converting into string

function calculateSum2(number){
    if(number <1){
        throw new Error("Invalid input: Input number must be a positive number!");
    }

    let input = number;
    let result = 0;
    while(input > 0){
        let lastDigit = input%10;
        console.log(lastDigit);
        input = Math.floor(input/10);
        console.log(input);
        result = result + lastDigit;
        console.log(result);
    }
    return result;
}

console.log(`The sum of 12 is : ${calculateSum2(12)}`);
console.log(`The sum of 456 is : ${calculateSum2(456)}`);