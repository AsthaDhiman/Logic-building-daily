//Write a function that returns the result of raising a given number to a specified power.
/*Input: Two number 1-Base 2-Exponent
Return: Base to the power of exponent
example: 2,3= 2*2*2=8
5,4=5*5*5*5=625*/

function calculatePower(base,expo){
    if(typeof base != "number" || typeof expo != "number"){
        throw new Error("Invaid input: only integers are allowed!");
    }
    if(base <0 || expo <0){
        throw new Error("Invalid input: only positive integers are allowed!");
    }
    let result = 1;
    for(let i=1; i<=expo; i++){
        console.log(`value of i = ${i}`);
        result = result * base;
        console.log(`result= ${result}`);
    }
    return result;
}

console.log(`Answer of 2 to the power of 3 is: ${calculatePower(2,3)}`);
console.log(`Answer of 5 to the power of 4 is: ${calculatePower(5,4)}`);