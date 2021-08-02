class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(distance) {
    let compareStrand = this.strand;
    let compareDistance = distance;

    if (this.strand.length > distance.length) {
      compareStrand = this.strand.slice(0, distance.length);
    }

    if (this.strand.length < distance.length) {
      compareDistance = distance.slice(0, this.strand.length);
    }

    let mutations = [].filter.call(compareStrand, (char, index) => {
      return char !== compareDistance[index]
    });

    return mutations.length;
  }
}

module.exports = DNA;

//requirements
//two zero length strands return distance of 0

//identical strands return 0

//return the number of times that characters at the same index in two strands are not the same

//if one strand is longer, ignore the extra length and compute the distance
//between the shorter strand and the first portion of the long strand which is the
//same length as the short strand

//the original strand must not be shortened so that it can be compared with multiple
//strands
