function addToHeap(minHeap, v, index) {
  // get parent value
  minHeap[index] = v;
  if (index < 1) {
    return;
  }
  let parentIndex = Math.floor(index / 2);
  if (minHeap[parentIndex] > v) {
    [minHeap[index], minHeap[parentIndex]] = [minHeap[parentIndex], minHeap[index]]
    addToHeap(minHeap, v, parentIndex)
  }
}

function buildMinHeap(arr) {
  let minHeap = [];
  for (let i = 0; i < arr.length; i++) {
    addToHeap(minHeap, arr[i], minHeap.length)
  }
  return minHeap
}

// kind of select sort, using minHeap or maxHeap
// get the max or min value every time
function heapSort(arr) {
  let res = [];
  let heap = buildMinHeap(arr)
  while (heap.length > 0) {
    res.push(heap.shift())
    heap = buildMinHeap(heap)
  }
  return res;
}

function test() {
  let arr = [10, 8, 32, 5, 1, 5, 23, 2, 1, 16, 23, 11, 12, 55, 8, 9, 8, 6, 12, 15];
  const resArr = heapSort(arr)
  console.log(resArr)
}
test();
