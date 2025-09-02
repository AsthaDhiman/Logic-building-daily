//Write a function that generates and prints a mutiplication table of a given number to a specified range.
//input: 2 positve number 1- table of 2- table till

//example 1
function printMultiplicationTble(tableOf,tableTill){
    for(let i = 1; i <= tableTill; i++){
        console.log(`${tableOf} * ${i} = ${tableOf * i}`);
    }
}

printMultiplicationTble(4,10);

//exampe2
function printMultiplicationTble2(tableOf,tableTill){
    for(let i=tableOf; i<=tableOf*tableTill; i+=tableOf){
        console.log(`${tableOf} * ${i} = ${i}`);
    }
}
printMultiplicationTble2(4,10);