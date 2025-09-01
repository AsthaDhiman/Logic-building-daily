//Write a function to reverse a string.

function reverseString(string){
    if(typeof string !== 'string'){
        throw new Error("Invaild input: Only strings are allowed!");
    }
    let result = '';
    for(let i=string.length-1; i>=0 ; i--){
        result = result + string[i];
    }
    return result;
}

console.log(reverseString("Astha"));
// console.log(reverseString(12345)); //error

//by using array method

function reverseString2(string){
    if(typeof string !== 'string'){
       throw new Error("Invaild input: Only strings are allowed!");
   }
    const splittedInput = string.split('');  //['A','s','t','h','a'];
    const reverseArray = splittedInput.reverse();
    const result = reverseArray.join('');
    return result;
}

console.log(reverseString2("Astha"));
// console.log(reverseString2(12345)); //error