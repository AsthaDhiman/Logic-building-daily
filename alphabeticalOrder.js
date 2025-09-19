/*Write a program that checks if a given string is in alphabetical order
Input: A string
Output: true if all character are in alphabetical order
false if not in alhabetical order*/

function isStringInAlphabeticalOrder(inputString){
    inputString = inputString.replace(/ /g, '');
    inputString = inputString.toLowerCase();
    for(let i=0; i<inputString.length-1; i++){
        if(inputString[i]>inputString[i+1]){
            return false;
        }
    }
    return true;
}

console.log(isStringInAlphabeticalOrder("acdefgh")); //true
console.log(isStringInAlphabeticalOrder("ohstu"));   //false
console.log(isStringInAlphabeticalOrder("hAshy"));  //false
console.log(isStringInAlphabeticalOrder("ab  c d")); //true