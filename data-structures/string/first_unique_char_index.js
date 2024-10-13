const str0 = "leetcode";
const str1 = "loveleetcode";

function firstUniqueCharIndex(str) {
  const charFreq = new Map(); // to store frequency of each character

  // First pass: Count the frequency of each character
  for (let char of str) {
    if (charFreq.has(char)) {
      charFreq.set(char, charFreq.get(char) + 1);
    } else {
      charFreq.set(char, 1);
    }
  }

  // Second pass: Find the first character with a frequency of 1
  for (let i = 0; i < str.length; i++) {
    if (charFreq.get(str[i]) === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstUniqueCharIndex(str0));
console.log(firstUniqueCharIndex(str1));
