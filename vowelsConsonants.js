//Write a function that counts and prints the number of vowels and consonants in a given string.
/*Input: string
Return: count of vowels and consonants
example:"Hello World": 3 vowels and 7 consonants*/

function calculateVowelsAndConsonants(inputString) {
  inputString = inputString.toLowerCase(); //lower all case of the given string
  inputString = inputString.replace(/ /g, ""); //replace all the spaces into empty space.

  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";

  let vowelCount = 0;
  let consonantCount = 0;

  for (let i = 0; i < inputString.length; i++) {
    if (vowels.includes(inputString[i])) {
      vowelCount++;
    } else if (consonants.includes(inputString[i])) {
      consonantCount++;
    } else {
      console.log(inputString[i], "Is neither vowel nor consonant");
    }
  }
  return { vowelCount, consonantCount };
}

console.log(calculateVowelsAndConsonants("Hello World"));
console.log(calculateVowelsAndConsonants("Astha Dhiman"));
