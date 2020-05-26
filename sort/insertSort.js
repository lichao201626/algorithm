function insertSort(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res = insert(res, arr[i])
  }
  return res;
}

function insert(arr, v) {
  let res;
  let index = findIndex(arr, v)
  res = [
    ...arr.slice(0, index),
    v,
    ...arr.slice(index, arr.length)
  ]
  return res;
}

function findIndex(arr, v) {
  let index = arr.length;
  for (let i = 0; i<arr.length; i++) {
    if (arr[i] > v) {
      index = i;
      break;
    }
  }
  return index
}

function test() {
  let arr = [10, 8, 32, 5, 1, 5, 23, 2, 1, 16, 23, 11, 12, 55, 8, 9, 8, 6, 12, 15];
  let resArr = insertSort(arr)
  console.log(resArr)
}
test();
