//Write a function that finds all the factors of the given number.
/*Input: number,positive integer
Return: Factors of a number
Factor: Is a number that divides the given number evenly or exactly, leaving no remainder*/

function calculateFactor(inputNumber){
   if(inputNumber < 1){
    throw new Error("inputNumber should be greater than zero.");
   }
   if(isNaN(inputNumber)){
    throw new Error("Invalid input: inputNumber must be a number.");
   }
   if(!Number.isInteger(inputNumber)){
    throw new Error("Invalid input: Decimals are not allowed");
   }
   let result = [];
   for(let i=0; i<=inputNumber; i++){
    if(inputNumber % i === 0){
        result.push(i);
    }
   }
   return result;
}

console.log(`Factors of 4 are:${calculateFactor(4)}`);
console.log(`Factors of 16 are:${calculateFactor(16)}`);
console.log(`Factors of 35 are:${calculateFactor(35)}`);
