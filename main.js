function MyArray(...args) {
  for(let i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
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

const arr = new MyArray(2, 4, 8, 16); 
const poorArr = new Array(2, 4, 8, 16);

//console.log(arr.push(12, 120, 4341, "rofl"));
console.log(arr.pop());
console.log(arr);

//console.log(arr.customForEach(item => console.log(item)))
