import { MyArray } from "./main.js";

const arr = new MyArray('арбузы', 'бананы', 'Вишня'); 
const poorArr = new Array('арбузы', 'бананы', 'Вишня');

//test arr
//console.log(arr);

//test filter method
// console.log(arr.filter(item => item % 2 === 0))

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
// console.log(arr.sort());
// console.log(arr.sort((a, b) => a.length - b.length));
// console.log(arr.sort((a, b) => a - b));