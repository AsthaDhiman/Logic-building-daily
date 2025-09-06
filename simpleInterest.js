//Write a function that calculate and prints the simple interest on a loan amount
/*Input: Principal Amount, Interest rate(yearly), Time duration (how many years)
Return: Interest amount
Simple Interest: (Principal*Interest_Rate*Time_duration)/100*/

function calculateSimpleInterest(principal,interestRate,timeDuration){
    if(isNaN(principal) || isNaN(interestRate) || isNaN(timeDuration)){
        throw new Error("Invalid input: all input must be a number");
    }
    if(principal<=0 || interestRate<=0 || timeDuration <=0){
        throw new Error("Invalid input: all input must be positive number");
    }

    let simpleInterest = 0;
    simpleInterest = (principal * interestRate * timeDuration) / 100;
    simpleInterest = simpleInterest.toFixed(2);
    return simpleInterest;
}

console.log(`The Simple Interest of 1000 rupees at 5% interest rate for 1 year is: ${calculateSimpleInterest(1000,5,1)}`);
console.log(`The Simple Interest of 20000 rupees at 10% interest rate for 5 year is: ${calculateSimpleInterest(20000,10,5)}`);