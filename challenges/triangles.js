class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [ side1, side2, side3 ];
    this.sides.sort((a, b) => a - b);
    if (!this.isValidTriangle()) {
      throw new Error('Not a valid triangle');
    }
  }

  sidesArePositiveNumbers() {
    return this.sides.every(side => typeof side === 'number' && side > 0);
  }

  sidesAreValidLengths() {
    return this.sides[0] + this.sides[1] > this.sides[2];
  }

  isValidTriangle() {
    return this.sidesArePositiveNumbers() && this.sidesAreValidLengths();
  }

  kind() {
    if (this.sides[0] === this.sides[2]) {
      return "equilateral";
    } else if (this.sides[0] === this.sides[1] ||
               this.sides[1] === this.sides[2]) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
}

module.exports = Triangle;
