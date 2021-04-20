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

const arr = new MyArray(15, 12, 'shgsf', 1234); 

console.log(arr.push(12, 120, 4341, "rofl"));