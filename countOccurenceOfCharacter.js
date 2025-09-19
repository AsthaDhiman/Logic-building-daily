/*Write a program that counts the occurence of each character in a given string.
Input: A string
Output: Count of each character in the string*/

//Method One by using for loop
function countCharacters(inputString){
    const result = {};
    inputString = inputString.toLowerCase();
    for(let i=0; i<inputString.length; i++){
        if(!result[inputString[i]]){
            result[inputString[i]] = 0;
        }
        result[inputString[i]] = result[inputString[i]] + 1;
    }
    return result;
}

console.log(countCharacters("Astha Dhiman"));

//Method Two by using reduce fuction
function countCharacters2(inputString){
    inputString = inputString.toLowerCase();
    const splittedString = inputString.split("");
    const result = splittedString.reduce((acc,char) => {
        if(!acc[char]){
            acc[char] = 0;
        }
        acc[char] = acc[char] + 1;
        return acc;
    }, {});
    return result;
}

console.log(countCharacters2("Astha Dhiman"));