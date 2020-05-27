// divide to buckets, then sort every single bucket
function bucketSort(arr) {
  let buckets = defineBuckets();
  let bucketMap = {};
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let b = buckets.find(bucket => {
      return bucket.min <= arr[i] && bucket.max >= arr[i]   
    });
    bucketMap[b.k] = bucketMap[b.k] ? [
      ...bucketMap[b.k],
      arr[i]
    ] : [arr[i]]
  }
  console.log(bucketMap);
  for (let i = 0; i < buckets.length; i++) {
    let key = buckets[i].k;
    bucketMap[key] = bucketMap[key] || [];
    sortSingleBucket(bucketMap[key]);
    res = [
      ...res,
      ...bucketMap[key]
    ]
  }
  return res;
}

function defineBuckets() {
  return [
    {
      k: 'a',
      max: 8,
      min: 0
    },
    {
      k: 'b',
      max: 15,
      min: 9
    },
    {
      k: 'c',
      max: 30,
      min: 16
    },
    {
      k: 'd',
      max: 60,
      min: 31
    }
  ]
}

// using other sort algorithm
function sortSingleBucket(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
}

function test() {
  let arr = [10, 8, 32, 5, 1, 5, 23, 2, 1, 16, 23, 11, 12, 55, 8, 9, 8, 6, 12, 15];
  const resArr = bucketSort(arr)
  console.log(resArr)
}
test();
