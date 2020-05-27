function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let mid = Math.round(arr.length / 2);
  let arr1 = arr.slice(0, mid)
  let arr2 = arr.slice(mid, arr.length)
  return merge(mergeSort(arr1), mergeSort(arr2));
}

function merge(arr1, arr2) {
  let res = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] > arr2[0]) {
      res.push(arr2.shift())
    } else {
      res.push(arr1.shift())
    }
  }
  if (arr1.length > 0) {
    res = [
      ...res,
      ...arr1
    ]
  }
  if (arr2.length > 0) {
    res = [
      ...res,
      ...arr2
    ]
  }
  return res;
}

function test() {
  let arr = [10, 8, 32, 5, 1, 5, 23, 2, 1, 16, 23, 11, 12, 55, 8, 9, 8, 6, 12, 15];
  let resArr = mergeSort(arr)
  console.log(resArr)
}
test();
