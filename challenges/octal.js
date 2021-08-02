class Octal {
  constructor(octal) {
    this.octal = octal;
  }

  toDecimal() {
    if (this.octal.match(/[^0-7]/g)) {
      return 0;
    }

    let reversedDigits = this.octal.split('').reverse();

    return reversedDigits.reduce((acc, curr, idx) => {
      return acc + (Number(curr) * Math.pow(8, idx));
    }, 0);
  }
}

module.exports = Octal;
