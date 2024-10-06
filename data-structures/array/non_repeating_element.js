{
  const arr = [4, 5, 1, 2, 5, 1, 2, 0, 4];

  function nonRepetingElement(arr) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
      if (!map.has(arr[i])) {
        map.set(arr[i], 1);
      } else {
        map.set(arr[i], map.get(arr[i]) + 1);
      }
    }
    let num;
    for (const pair of map) {
      if (pair[1] === 1) {
        num = pair[0];
        break;
      }
    }

    const index = arr.indexOf(num);

    if (index === -1) {
      return -1;
    }
    return index;
  }
  console.log(nonRepetingElement(arr));
}
