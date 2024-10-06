const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function rotateKToRight(arr, k) {
  const n = arr.length;
  k = k % n;

  // if target 'k' is a multiple of array length 'n' then no rotation takes place
  if (k === 0) {
    return arr;
  }

  const newArr = arr.slice(0, n - k);
  const kthArr = arr.slice(n - k);

  return kthArr.concat(newArr);
}

console.log(rotateKToRight(arr, 5)); // when k is less than array length
console.log(rotateKToRight(arr, arr.length)); // when k multiple of array length
console.log(rotateKToRight(arr, arr.length + 1)); // when k is greater than array length
