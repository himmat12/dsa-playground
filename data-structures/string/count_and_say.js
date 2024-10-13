const n = 4;

function countAndSay(n) {
  // Base case: The first term is always "1"
  if (n === 1) {
    return "1";
  }

  // Start with the first term
  let currentTerm = "1";

  // Build each subsequent term up to the nth term
  for (let i = 2; i <= n; i++) {
    let nextTerm = ""; // To store the next term
    let count = 1; // Initialize count of consecutive characters

    // Iterate over the current term
    for (let j = 1; j < currentTerm.length; j++) {
      // If the current character is the same as the previous one, increment the count
      if (currentTerm[j] === currentTerm[j - 1]) {
        count++;
      } else {
        // Append the count and the previous character to nextTerm
        nextTerm += count + currentTerm[j - 1];
        count = 1; // Reset count for the new character
      }
    }

    // Append the last group (since the loop ends before appending the last one)
    nextTerm += count + currentTerm[currentTerm.length - 1];

    // Move to the next term
    currentTerm = nextTerm;
  }
  return currentTerm;
}

console.log(countAndSay(n));
