class RomanNumeral {
  constructor(num) {
    this.num = num;
  }

  toRoman() {
    let digits = this.numToDigits();
    let numerals = this.digitsToNumerals(digits);
    return numerals.join('');
  }

  numToDigits() {
    return String(this.num).split('').map(num => Number(num));
  }

  digitsToNumerals(array) {
    let reversedDigits = array.reverse();
    let numerals = [];
    let [ones, fives, tens] = [];
    for (let idx = 0; idx < reversedDigits.length; idx++) {
      if (idx === 0) {
        [ ones, fives, tens ] = ['I', 'V', 'X'];
      } else if (idx === 1) {
        [ ones, fives, tens ] = ['X', 'L', 'C'];
      } else if (idx === 2) {
        [ ones, fives, tens ] = ['C', 'D', 'M'];
      } else if (idx === 3) {
        ones = 'M';
      }

      switch (reversedDigits[idx]) {
        case 1:
          numerals.unshift(ones);
          break;
        case 2:
          numerals.unshift(ones + ones);
          break;
        case 3:
          numerals.unshift(ones + ones + ones);
          break;
        case 4:
          numerals.unshift(ones + fives);
          break;
        case 5:
          numerals.unshift(fives);
          break;
        case 6:
          numerals.unshift(fives + ones);
          break;
        case 7:
          numerals.unshift(fives + ones + ones);
          break;
        case 8:
          numerals.unshift(fives + ones + ones + ones);
          break;
        case 9:
          numerals.unshift(ones + tens);
      }
    }
    return numerals;
  }
}

module.exports = RomanNumeral

//Requirements
//1 -> I     10 -> X     100 -> C     1000 -> M
//2 -> II    20 -> XX    200 -> CC    2000 -> MM
//3 -> III   30 -> XXX   300 -> CCC   3000 -> MMM
//4 -> IV    40 -> XL    400 -> CD
//5 -> V     50 -> L     500 -> D
//6 -> VI    60 -> LX    600 -> DC
//7 -> VII   70 -> LXX   700 -> DCC
//8 -> VIII  80 -> LXXX  800 -> DCCC
//9 -> IX    90 -> XC    900 -> CM


//Each place value essentially has a different value for 1s, 5s and 10s that are each
//used in the same format for the digits 1-9

//Modern Roman numerals ... are written by expressing each digit separately
//starting with the left most digit and skipping any digit with a value of zero.
