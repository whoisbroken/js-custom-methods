export const MyArray = function(...args) {
  for(let i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  Object.defineProperty(this, 'length', {
    get: function getLength() {
      return Object.keys(this).length
    }
  });
};  

MyArray.prototype[Symbol.iterator] = function () {
  return {
    current: 0,
    last: this.length - 1,
    items: this,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.items[this.current++] };
      } else {
        return { done: true };
      }
    }
  };
};

MyArray.prototype.filter = function (callback, thisArg) {
  const array = this;
  const newArray = new MyArray();
  
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if(callback.call(thisArg, currentValue, i, array)) {
      newArray.push(currentValue);
    }
  }
  return newArray;
};

MyArray.prototype.forEach = function (callback, thisArg) {
  const array = this;

  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i]
    callback.call(thisArg, currentValue, i, array);
  }

  return undefined;
};


MyArray.prototype.map = function (callback, thisArg) {
  const array = this,
        newArray = new MyArray();

  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    newArray[i] = callback.call(thisArg, currentValue, i, array);
  }
  return newArray;
};


MyArray.prototype.reduce = function(callback, initialValue) {
  const array = this;
  let accumulator = initialValue === undefined ? undefined : initialValue;

  if (array === null && initialValue === undefined) {
    throw new TypeError('Array.prototype.reduce called on null or undefined');
  }

  for (let i = 0; i < array.length; i++) {
    if (accumulator){
      let currentValue = array[i];
      accumulator = callback(accumulator, currentValue, i, array);
    }
    if (accumulator === undefined) {
      let currentValue = array[i];
      if (i === 0) {
        accumulator = array[i];
      } else {
        accumulator = callback(accumulator, currentValue, i, array);
      }
    }
  }

  return accumulator;
}

MyArray.prototype.sort = function (callback) {
  if (callback) {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - 1; j++) {
            if (callback(this[j], this[j + 1]) > 0) {
              let temp = this[j];
              this[j] = this[j + 1];
              this[j + 1] = temp;
            }
        }
    }
  } else {
    for (let i = 1; i < this.length; i++) {
      const current = this[i];
      while (this[i] > 0 && this[i - 1] > current) {
          this[i] = this[i - 1];
          i--;
      }
      this[i] = current;
    }
  }
  return this;
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

MyArray.prototype.toString = function() {
  const array = this;
  let result = "";

  for (let i = 0; i < array.length; i++) {
    result += `${array[i]},`
  }

  return result.slice(0, result.length - 1);
};

MyArray.prototype.from = function (array, callback, thisArg) {
  const newArray = new MyArray();
  let i = 0;

  if (typeof array[Symbol.iterator]) {
    for (let value of array) {
      if (callback) {
        newArray.push(callback.call(thisArg, value, i, array));
      } else {
        newArray.push(value);
      }
      i++;
    }
  }
  return newArray;
};