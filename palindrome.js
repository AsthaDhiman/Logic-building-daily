//Write a function that checks if a string is palindrome or not.
/*input: a string 
return: boolean
a palindrome is a word that reads the same backward or forward example: madam,level,abba*/


function isPalindrome(inputString) {
  console.log(inputString);
  let reverseString = inputString.split("").reverse().join("");
  console.log(reverseString);
  if (reverseString == inputString) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("astha"));
console.log(isPalindrome("plaindrome"));

