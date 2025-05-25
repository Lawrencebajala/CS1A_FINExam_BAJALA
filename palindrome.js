function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  console.log("Original string:", str);
  console.log("Reversed string:", reversedStr);
  return str === reversedStr;
}

let word1 = prompt("Enter the first word:");
let word2 = prompt("Enter the second word:");

console.log(word1 + " is a palindrome: " + isPalindrome(word1));
console.log(word2 + " is a palindrome: " + isPalindrome(word2));

