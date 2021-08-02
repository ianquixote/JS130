class SumOfMultiples {
  constructor(...set) {
    this.set = set;
  }

  static to(max, set = [3, 5]) {
    return SumOfMultiples.getAllMultiples(set, max).reduce((acc, curr) => acc + curr, 0);
  }

  to(max) {
    return SumOfMultiples.to(max, this.set)
  }

  static getAllMultiples(set, max) {
    let multiples = [];
    set.forEach(num => {
      let multiplier = 1;
      let product = num * multiplier;
      while (product < max) {
        if (!multiples.includes(product)) {
          multiples.push(product);
        }
        product = num * multiplier++;
      }
    });
    return multiples;
  }
}

module.exports = SumOfMultiples;
