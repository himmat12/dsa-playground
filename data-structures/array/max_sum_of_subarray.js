const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSumOfSubArray(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = arr[i] > currentSum + arr[i] ? arr[i] : currentSum + arr[i];
    maxSum = maxSum > currentSum ? maxSum : currentSum;
  }

  return maxSum;
}

console.log(maxSumOfSubArray(arr));
