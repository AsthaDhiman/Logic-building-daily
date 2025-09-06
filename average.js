//write a funtion that calculates and return the average of a set of numbers.
/*Input: Array of positive integer number
Return: Average of numbers
Average: Calculated by dividing the total of the values by the number of the values
Example: [1,2,4]=(1+2+4)/3=2.33333*/

function calculateAverage(inputArray){
    if(!Array.isArray(inputArray)){
        throw new Error("Invalid input: only array are allowed!");
    }
    for(let element of inputArray){
        if(typeof element != 'number' || element <0){
            throw new Error("Invalid input: all elements must be positive integer");
        }
    }
    
    let sum = 0;
    for(let i = 0; i<inputArray.length; i++){
        sum += inputArray[i];
    }
    let result = sum / inputArray.length;
    return result;
}

console.log(`The average of [1,2,4] is: ${calculateAverage([1,2,4])}`);
console.log(`The average of [1,2,7,14] is: ${calculateAverage([1,2,7,14])}`);










