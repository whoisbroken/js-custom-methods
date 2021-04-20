const arr = new MyArray(1, 2, 3, 4, 5, 6, 7, 8); 

console.log(arr);

function MyArray(...args) {
  for(let i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  Object.defineProperty(this, 'length', {
    get: function getLength() {
      return Object.keys(this).length
    }
  });
};

MyArray.prototype.filter = function (callback, thisArg) {
  const array = this;
        newArray = new MyArray();
  
  for (let i = 0; i < array.length; i++) {
    element = array[i];
    if(callback.call(thisArg, element, i, array)) {
      newArray.push(element);
    }
  }
  return newArray;
};

MyArray.prototype.forEach = function (callback, thisArg) {
  let array = this,
      currentValue;

  for (let i = 0; i < array.length; i++) {
    callback.call(thisArg, currentValue, i, array);
  }

  return undefined;
};

MyArray.prototype.map = function (callback, thisArg) {
  const array = this,
        newArray = new MyArray();

  for (let i = 0; i < array.length; i++) {
    currentValue = array[i];
    newArray[i] = callback.call(thisArg, array[i], currentValue, array);
  }
  return newArray;
};

MyArray.prototype.push = function(...args) {
  if(args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
    }
    return this.length;
  }
};


MyArray.prototype.pop = function() {
  const latest = this[this.length - 1];
  delete this[this.length - 1];
  return latest;
};


//test filter method
//console.log(arr.filter(item => item % 2 === 0))
// console.log(arr.filter(
  // function (item) {
  //   return item % 2 === 0
  // }))

//test forEach method
// console.log(arr.forEach(function (item, i , arr) {
//   console.log(item, i , arr)
// }), {a: 1, b: 2})

//test map method
//console.log(arr.map(item => item * 2))

//test push method
//console.log(arr.push(12, 120, 4341, "rofl"));

//test pop method
//console.log(arr.pop());
//console.log(arr);
