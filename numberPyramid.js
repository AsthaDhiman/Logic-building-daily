/*Write a program that print a number pyramid
Input: A positive number
Output: Number pyramid*/

function generatePyramid(inputNumber){
    if(isNaN(inputNumber) || inputNumber<=0){
        throw new Error("Invalid input only positive integers are allowed!");
    }

    for(let i=1; i<=inputNumber; i++){
        // console.log(i);

        let lineContent = "";
        for(let space=1; space<=inputNumber-i; space++){
            lineContent = lineContent + " ";
        }

        for(let count=1; count<=i; count++){
            lineContent = lineContent + count;
        }

        for(let reverseCount=i-1; reverseCount>=1; reverseCount--){
            lineContent = lineContent + reverseCount;
        }
        console.log(lineContent);
    }
}


generatePyramid(5);