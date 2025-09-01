//Write a function that calculate factorial of given number

function factorial(number){
    if(number < 0 || typeof number !== "number"){
        throw new Error("Invalid Input: only positive number are allowed!");
    }
    let result = 1;
    for(let i=1; i<=number ;i++){
        result *= i;
    }
    return result;
}

console.log(factorial(3));
console.log(factorial(0));
//console.log(factorial("z")); //error

//solve factorial problem by using recursion
function factorialRecursion(number){
    if(number<0 || typeof number !== "number"){
        throw new Error("Invalid input: input should be number or greater than or equal to zero");
    }
    if(number === 0 || number === 1){
        return 1;
    }

    return number * factorialRecursion(number -1);
    //return 3 * (2!);  = 3*2 = 6 answer
    //return 2 * (1!);  = 2*1 = 2
}


console.log(factorialRecursion(3));
console.log(factorialRecursion(0));