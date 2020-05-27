function radixSort(arr) {
  let finish = false;
  let index = 1;
  while (!finish) {
    let sortObj =  sortIndex(arr, index)
    finish = sortObj.finish;
    arr = sortObj.res
    console.log("aaa", arr)
    index = index * 10
  }
  return arr;
}

function sortIndex(arr, index) {
  let buckets = [];
  let res = [];
  let finish = false;
  for (let i=0; i<10;i++) {
    buckets[i] = [];
  }
  for (let i=0; i<arr.length;i++) {
    let v = (Math.floor(arr[i]/index))%10;
    console.log("vvv", v, arr[i])
    buckets[v].push(arr[i])
  }
  console.log(buckets)
  for (let i=0; i<10;i++) {
    res = [
      ...res,
      ...buckets[i]
    ]
  }
  if (arr.length == buckets[0].length) {
    finish = true;
  }
  return {res, finish};
}

function test() {
  let arr = [10, 8, 32, 5, 1, 5, 23, 2, 1, 16, 23, 11, 12, 55, 8, 9, 8, 6, 12, 15];
  let resArr = radixSort(arr)
  console.log(resArr)
}
test();
