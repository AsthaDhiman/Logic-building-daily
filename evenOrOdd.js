//Write a function that tells if a given number is even or odd

function isEvenOrOdd(number){
    if( number %2 === 0){
        return "even";
    }else{
        return "odd"
    }
}

console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(7));
console.log(isEvenOrOdd(-3));

//using ternary operator

function isEvenOrOdd2(number){
    return number % 2 === 0 ? "even" : "odd";
}

console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(7));
console.log(isEvenOrOdd(-3));