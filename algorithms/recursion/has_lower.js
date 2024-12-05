/**
 *  This function takes a string input and returns true weather the string has any lowercase letter in it else false
 */
function hasLower(str) {
  let isTrue = false;
  // we run the recursive  operation only if we have at least 1 sized input string length
  if (str.length !== 0) {
    // condition to check if the string has lower case letter or not
    // it takes the first index and convert it into corresponding int value and match from the range 96 to 123,
    // i.e., the int value ranging from 'a' to 'z'
    if (str.charCodeAt(0) > 96 && str.charCodeAt(0) < 123) {
      isTrue = true;
      console.log(`FOUND: value of '${str.substring(1)}' ${str.charCodeAt(0)}`);
    }

    // until the lowercase value is not found we run the function recursively until the size of input is reduced to 1
    if (!isTrue) {
      console.log(`value of '${str.substring(0, 1)}' ${str.charCodeAt(0)}`);
      isTrue = hasLower(str.substring(1));
    }
  }
  return isTrue;
}

// checking the charcode value from 'a' to 'z' lowercase letters
console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));

// testing the function
console.log(hasLower("HELLO"));
console.log("\n");
console.log(hasLower("HELLo"));
