function quickSort(arr) {
  if(arr.length < 2) {
    return arr;
  }
  let target = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i< arr.length; i++) {
    if (arr[i] > target) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return [
    ...quickSort(left),
    target,
    ...quickSort(right)
  ]
}

function test() {
  let arr = [10, 8, 32, 5, 1, 5, 23, 2, 1, 16, 23, 11, 12, 55, 8, 9, 8, 6, 12, 15];
  let resArr = quickSort(arr)
  console.log(resArr)
}
test();
