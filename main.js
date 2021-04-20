const arr = new MyArray(1, 2, 3, 4, 5, 6, 7, 8); 

function MyArray(...args) {
  for(let i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
}

if(!MyArray.prototype.customFilter) {
  MyArray.prototype.customFilter = function (callback, thisArg) {
    let array = this,
      result = [],
      element;
      thisArg = this;
      
      for (let i = 0; i < array.length; i++) {
        element = array[i];
        if(callback(element, i, array, thisArg)) result.push(element);
      }
      return result;
    }
}
if(!MyArray.prototype.customForEach) {
  MyArray.prototype.customForEach = function (callback, thisArg) {
    let array = this,
        currentValue;
        thisArg = this;
  
    for (let i = 0; i < array.length; i++) {
      currentValue = array[i];
      callback(currentValue, i, array, thisArg);
    }
  }
}

if (!MyArray.prototype.push) {
  MyArray.prototype.push = function(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
      this.length++;
    }
    return this.length;
  };
}

if (!MyArray.prototype.pop) {
  MyArray.prototype.pop = function() {
    let array = this,
        length = array.length;
        element = array[length - 1];
    length = length - 1;
    array = array.customFilter(el => el !== element);
    console.log(array)
    return element;
  };
}

//test push method
//console.log(arr.push(12, 120, 4341, "rofl"));

//test filter method
//console.log(arr.customFilter(item => item % 2 === 0))

//test forEach method
//console.log(arr.customForEach(item => console.log(item)))

//test pop method
//console.log(arr.pop());
//console.log(arr);
