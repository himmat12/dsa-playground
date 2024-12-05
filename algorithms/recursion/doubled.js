/**
 * This method doubles each chars in the given str argument by one of each and returns the final doubled string output
 * For eg: [Input: "Hello"] -> [Output: "HHeelllloo"]
 */
function doubled(str) {
  if (str.length === 0) {
    console.log("Recursion ended and returning empty string.");
    return "";
  }

  console.log(`Initial String input: ${str}`);
  let doubledStr =
    str.charAt(0) + "" + str.charAt(0) + "" + doubled(str.substring(1));
  console.log(`Dobled chars String: ${doubledStr}`);

  return doubledStr;
}

console.log("Final output: " + doubled("Pop"));
