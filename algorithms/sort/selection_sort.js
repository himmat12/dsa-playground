const arr = [12, 3, 6, 14, 5, 9];
console.log(arr);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    console.log("min = " + arr[min]);
    for (let j = i + 1; j < arr.length; j++) {
      console.log("current = " + arr[j]);
      // find the min value in the array
      if (arr[j] < arr[min]) {
        min = j;
        console.log("new min = " + arr[min]);
      }
    }
    // swap the min value with the current pointer value i.e, the i (current sorting index)
    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
    console.log(arr);
  }
  // return arr;
}

// console.log();
selectionSort(arr);
