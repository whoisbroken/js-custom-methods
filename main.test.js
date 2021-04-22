import { MyArray } from "./main.js";

const arr = new MyArray(100, 1, 4, -5, 5, 4);
const realArr = [...arr];

//test arr
//console.log(arr);

//test spread
// console.log([arr])
// console.log(realArr)

//test filter method
// console.log(arr.filter(123))

//test forEach method
// console.log(arr.forEach(function (item, i , arr) {
//    console.log(item, i , arr)
//  }), {a: 1, b: 2})

//test map method
//console.log(arr.map(item => item * 2))

//test reduce method
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(arr.reduce(reducer));
// console.log(arr.reduce(reducer, 5));

//test push method
// console.log(arr.push(12, 120, 4341, "rofl"));
// console.log(arr)

//test pop method
// console.log(arr.pop());
// console.log(arr);

//test toString method
//console.log(arr.toString())

//test sort method
//console.log(arr.sort());
// console.log(arr.sort((a, b) => a.length - b.length));
// console.log(arr.sort((a, b) => a - b));

// test from method
// console.log(arr.from('foo'));
// var s = new Set(['foo', window]);
// var m = new Map([[1, 2], [2, 4], [4, 8]]);
// console.log(arr.from(s))
// console.log(arr.from(m))
// console.log(arr.from([1, 2, 3], x => x + x))

// function f() {
//   return arr.from(arguments);
// }
// console.log(f(5, 2, 1))