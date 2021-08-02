class Element {
  constructor(data, nextElement = null) {
    this.data = data;
    this.nextElement = nextElement;
  }

  datum() {
    return this.data;
  }

  isTail() {
    return this.nextElement === null;
  }

  next() {
    return this.nextElement;
  }
}

class SimpleLinkedList {
  constructor() {
    this.list = [];
  }

  static fromArray(arr) {
    if (arr === null) return new SimpleLinkedList();
    let newList = new SimpleLinkedList();

    for (let idx = arr.length - 1; idx >= 0; idx--) {
      newList.push(arr[idx])
    }

    return newList;
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(data) {
    this.list.push(new Element(data, this.head()));
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.head().datum();
  }

  head() {
    if (this.list.length === 0) return null;
    return this.list[this.list.length - 1];
  }

  pop() {
    let data = this.peek();
    this.list.pop();
    return data;
  }

  toArray() {
    let arr = [];
    for (let idx = this.list.length - 1; idx >= 0; idx--) {
      arr.push(this.list[idx].datum());
    }
    return arr;
  }

  reverse() {
    let arr = this.toArray();
    arr.reverse();
    return SimpleLinkedList.fromArray(arr);
  }
}

let list = new SimpleLinkedList();
console.log(list.size());

module.exports = {
  Element,
  SimpleLinkedList
};
