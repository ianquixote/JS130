function myForEach(array, callback, context) {
  for (let index = 0; index < array.length; index++) {
    callback.call(context, array[index], index, array);
  }
}


myForEach(["a", "b", "c"], (value, index, arr) => console.log(`After ${value} comes ${arr[index + 1]}`));

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
myForEach(["a", "b", "c"], item => console.log(item));
myForEach([1, 2, 3], foo.showItem, foo);
myForEach([4, 5, 6], foo.showItem); //TypeError: cannot read property 'prefix' of undefined
