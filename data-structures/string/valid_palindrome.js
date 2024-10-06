const str = "A man, a plan, a canal: Panama";

function isPalindrome(str) {
    // reversedStr stores filters and stores only lowercase chars from 'a' to 'z' as per the problem constraint
  const filteredStr = str
    .toLowerCase() // converts the string into lowercase
    .split("") // splits each chars in a string ans return a new array of chars
    .filter((e) => e.charCodeAt(0) >= 97 && e.charCodeAt(0) <= 122) // filters only chars from 'a' to 'z'
    .join(""); // join joins all the chars in an array and returns a joined string of chars

  const reversedStr = filteredStr.split("").reverse().join("");

  return reversedStr === filteredStr;
}

console.log(isPalindrome(str));
