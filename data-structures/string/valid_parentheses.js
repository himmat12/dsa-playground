const str1 = "()[]{}";
const str2 = ")]{[)";

function validParentheses(str) {
  // Use an array as a stack to store opening brackets
  const stack = [];
  // Create a mapping of closing brackets to their corresponding opening brackets
  const parenthesesMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of str) {
    // If the character is an opening bracket, push it onto the stack
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    }
    // If the character is a closing bracket
    else if (char === ")" || char === "]" || char === "}") {
      // Check if the stack is empty or the top of the stack does not match
      if (stack.length === 0 || stack.pop() !== parenthesesMap[char]) {
        return false; // Invalid if there's no matching opening bracket
      }
    }
  }

  // If the stack is empty, all brackets are matched correctly
  return stack.length === 0;
}

console.log(validParentheses(str1));
console.log(validParentheses(str2));
