function shellSort(arr) {
  let index = Math.floor(arr.length / 2);
  while (index > 0) {
    indexSort(arr, index)
    index = Math.floor(index / 2);
  }
}

function indexSort(arr, index) {
  for (let i = index; i <= arr.length - index; i++) {
    for (let j = i; j >= 0; j -= index) {
      if (arr[j] > arr[j + index]) {
        [arr[j], arr[j + index]] = [arr[j + index], arr[j]]
      }
    }
  }
}

function test() {
  let arr = [10, 8, 32, 5, 1, 5, 23, 2, 1, 16, 23, 11, 12, 55, 8, 9, 8, 6, 12, 15];
  shellSort(arr)
  console.log(arr)
}
test();
