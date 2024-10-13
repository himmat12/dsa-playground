const str0 = "abcabcdbb";
const str1 = "bbb";
const str2 = "abcaefghij";

function maxUniqueSubstringLength(str) {
  const charSet = new Set(); // Set to track unique characters
  let maxLength = 0; // Maximum length of the unique substring
  let left = 0; // Left pointer for the sliding window

  for (let right = 0; right < str.length; right++) {
    // If we encounter a duplicate, move the left pointer until the duplicate is removed
    while (charSet.has(str[right])) {
      charSet.delete(str[left]);
      left++; // Move the left pointer to shrink the window
    }
    // Add the current character to the set
    charSet.add(str[right]);
    // Update the maxLength with the current window size (right - left + 1)
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(maxUniqueSubstringLength(str0));
console.log(maxUniqueSubstringLength(str1));
console.log(maxUniqueSubstringLength(str2));
