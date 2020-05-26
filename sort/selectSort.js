function selectSort(arr) {
  let res = [];
  while (arr.length > 0) {
    let min = arr[0];
    let temp = [];
    for (let i=1; i<arr.length; i++) {
      if (arr[i] < min) {
        temp.push(min)
        min = arr[i]
      } else {
        temp.push(arr[i])
      }
    }
    res.push(min)
    arr = temp;
  }
  return res;
}

function test() {
  let arr = [10, 8, 32, 5, 1, 5, 23, 2, 1, 16, 23, 11, 12, 55, 8, 9, 8, 6, 12, 15];
  const resArr = selectSort(arr)
  console.log(resArr)
}
test();
