function factorial(n) {
  if (n === 0) {
    console.log(`End of recursion returning 1`);
    return 1;
  }

  console.log(`Factorial started for ${n}`);
  console.log(`Calling factorial for ${n - 1}`);
  return n * factorial(n - 1);
}

console.log("Final calculated factorial is " + factorial(4));
