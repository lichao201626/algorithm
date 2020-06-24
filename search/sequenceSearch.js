function sequenceSearch(arr, v) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === v) {
            return i;
        }
    }
    return -1;
}
function test() {
    const arr = [10, 8, 32, 5, 1, 5, 23, 2, 1, 16, 23, 11, 12, 55, 8, 9, 8, 6, 12, 15];
    const v = 55;
    console.log(sequenceSearch(arr, v));
}
test();