function insectionSearch(arr, value, start, end) {
    const mid = Math.floor(start + (value - arr[start])/(arr[end]-arr[start])*(end-start));
    if (arr[mid] === value) {
        return mid;
    } else if (arr[mid] > value) {
        return insectionSearch(arr, value, start, mid - 1);
    } else {
        return insectionSearch(arr, value, mid + 1, end);
    }
}

function test() {
    let arr = [10, 8, 32, 5, 1, 5, 23, 2, 1, 16, 23, 11, 12, 55, 8, 9, 8, 6, 12, 15];
    const v = 55;
    arr = arr.sort((a, b) => a - b);
    console.log(arr)
    console.log(insectionSearch(arr, v, 0, arr.length - 1));
}
test();