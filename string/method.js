let str = '123456789';

// start 2 lenth 3
console.log(str.substr(2, 3))
// start 2 end 3
console.log(str.slice(2, 3))
// start 2 end 3
console.log(str.substring(2, 3))

// start 3 length 2
console.log(str.substr(3, 2))
// start 3 end 2
console.log(str.slice(3, 2))
// start 2 end 3
console.log(str.substring(3, 2))

// start 6, lenth 2
console.log(str.substr(-3, 2))
// start 6 end 2
console.log(str.slice(-3, 2))
// start 0 end 2
console.log(str.substring(-3, 2))

//start 3 length -2
console.log(str.substr(3, -2))
// start 3 end 6
console.log(str.slice(3, -2))
// start 0 end 3
console.log(str.substring(3, -2))
