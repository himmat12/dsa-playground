const arr = [4, 3, 2, 7, 8, 2, 3, 1];
const arr0 = [4, 3, 2, 7, 8, 2, 3, 2, 1];
const arr1 = [1];
const arr2 = [4, 7, 8, 2, 3, 1];

function duplicates(arr) {
  const visited = new Set();
  const duplicateSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    // if the element has already been seen, add it to duplicate set
    if (visited.has(num)) {
      duplicateSet.add(num);
    }
    // Mark the current number as seen
    visited.add(num);
  }

  return Array.from(duplicateSet);
}

console.log(duplicates(arr)); // when the array contains more than 1 repeting elements
console.log(duplicates(arr0)); // when the array contains more than two repeting elements
console.log(duplicates(arr1)); // when the array has one element
console.log(duplicates(arr2)); // when the array does not have any repeting elements
console.log(duplicates([])); // when the array is empty
