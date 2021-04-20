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

if(!MyArray.prototype.filter) {
  MyArray.prototype.filter = function (callback, thisArg) {
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
};

if(!MyArray.prototype.forEach) {
  MyArray.prototype.forEach = function (callback, thisArg) {
    let array = this,
        currentValue;
        thisArg = this;
  
    for (let i = 0; i < array.length; i++) {
      currentValue = array[i];
      callback(currentValue, i, array, thisArg);
    }

    return undefined;
  }
};

if (!MyArray.prototype.push) {
  MyArray.prototype.push = function(...args) {
    if(args) {
      for (let i = 0; i < args.length; i++) {
        this[this.length] = args[i];
      }
      return this.length;
    }
  };
};

if (!MyArray.prototype.pop) {
  MyArray.prototype.pop = function() {
    const latest = this[this.length - 1];
    delete this[this.length - 1];
    return latest;
  };
};

//test push method
//console.log(arr.push(12, 120, 4341, "rofl"));

//test filter method
//console.log(arr.customFilter(item => item % 2 === 0))

//test forEach method
//console.log(arr.customForEach(item => console.log(item)))

//test pop method
//console.log(arr.pop());
//console.log(arr);
