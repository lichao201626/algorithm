function binarySearch(arr, value, start, end) {
    const mid = Math.floor((start + end) / 2);
     if (arr[mid] === value) {
        return mid;
    } else if (arr[mid] > value) {
         return binarySearch(arr, value, start, mid);
    } else {
        return binarySearch(arr, value, mid + 1, end);
    } 
}

function test() {
    let arr = [10, 8, 32, 5, 1, 5, 23, 2, 1, 16, 23, 11, 12, 55, 8, 9, 8, 6, 12, 15];
    const v = 55;
    arr = arr.sort((a, b) => a-b);
    console.log(arr)
    console.log(binarySearch(arr, v, 0, arr.length-1));
}
test();