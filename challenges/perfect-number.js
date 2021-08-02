class PerfectNumber {
  static classify(num) {
    if (num <= 0) {
      throw new Error('Number must be positive');
    }

    let aliquot = PerfectNumber.getDivisors(num)
      .reduce((acc, curr) => acc + curr, 0);

    if (aliquot < num) {
      return 'deficient';
    } else if (aliquot === num) {
      return 'perfect';
    } else {
      return 'abundant';
    }
  }

  static getDivisors(num) {
    let divisors = [];
    for (let count = 1; count <= (num/2); count++) {
      if (num % count === 0) divisors.push(count);
    }
    return divisors;
  }
}


module.exports = PerfectNumber;
