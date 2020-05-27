// using another memory to counting the elements
// the elements must have a range
// if the max >>> min ...
function countingSort(arr) {
  let countingArr = [];
  let res = [];
  for (let i=0; i<arr.length;i++) {
    let index = arr[i];
    if (countingArr[index]) {
      countingArr[index]++
    } else {
      countingArr[index] = 1
    }
  }
  for (let i=0; i<countingArr.length;i++) {
    for (let j=0; j<countingArr[i]; j++) {
      res.push(i)
    }
  }
  return res
}

function test() {
  let arr = [10, 8, 32, 5, 1, 5, 23, 2, 1, 16, 23, 11, 12, 55, 8, 9, 8, 6, 12, 15];
  const resArr = countingSort(arr)
  console.log(resArr)
}
test();
