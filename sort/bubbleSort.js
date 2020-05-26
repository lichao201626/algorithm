function bubbleSort(arr) {
  for (let i=0;i<arr.length;i++) {
    for (let j=i;j<arr.length;j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]] 
      }
    }
  }
  return arr
}

function test() {
  let arr = [10, 8, 32, 5, 1, 5, 23, 2, 1, 16, 23, 11, 12, 55, 8, 9, 8, 6, 12, 15];
  bubbleSort(arr)
  console.log(arr)
}
test();
