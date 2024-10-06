const str = "Hello world!";

function reverseStr(str) {
  let reversed = "";
  //   manual reverse using loop
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  //   return Array.from(str).reverse().join(""); // alternative 1
  //   return str.split("").reverse().join(""); // alternative 2
  return reversed;
}

console.log(reverseStr(str));
