//Write a program that swaps two numbers
/*Input: Two numbers a and b
output: interchange the values of a and b*/

//by using third variable(temporary variable)
function swapNumbers(a,b){
    console.log(`Before Swap: ${a},${b}`)
    let c = a; //1
    a = b; //2
    b = c; //1
    console.log(`After Swap: ${a},${b}`)
}

swapNumbers(1,2);

//Without third value(this solution does not work with all the data types like string)

function swapNumbers2(a,b){
    console.log(`Before Swap: ${a},${b}`)
    a = a + b; //3
    b = a - b; //3-2=1
    a = a - b; //3-1=2
    console.log(`After Swap: ${a},${b}`)
}

swapNumbers2(1,2);