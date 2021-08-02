class Series {
  constructor(numString) {
    this.numString = numString;
  }

  slices(sliceLength) {
    if (sliceLength > this.numString.length) {
      throw new Error('Slice length must be shorter than the number string')
    }
    let slices = [];
    for (let idx = 0; idx <= this.numString.length - sliceLength; idx++) {
      slices.push(this.numString.slice(idx, idx + sliceLength).split(''));
      slices[idx] = slices[idx].map(num => Number(num));
    }
    return slices;
  }
}

module.exports = Series;
