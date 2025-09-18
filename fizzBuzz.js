/*Write a program that prints numbers from 1 to N, replacing
-multiples of 3 with "Fizz"
-multiples of 5 with "Buzz"
-multiples of both with "FizzBuzz"
Input: A positive number*/

function FizzBuzz(inputNumber){
    if(isNaN(inputNumber) || inputNumber<=0){
        throw new Error("Invalid input only positive integers are allowed!");
    }
    
    for(let i=1; i<=inputNumber; i++){
        if(i % 3===0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        else if(i % 3 === 0){
            console.log("Fizz");
        }
        else if(i % 5 === 0){
            console.log("Buzz");
        } 
        else{
            console.log(i);
        }
    }
}

FizzBuzz(36);