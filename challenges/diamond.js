class Diamond {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    if (letter === 'A') {
      return 'A\n'
    }

    let letterIdx = this.alphabet.indexOf(letter);

    let top = [];
    for (let idx = 0; idx < letterIdx; idx++) {
      let outerPad = ' '.repeat(letterIdx - idx);
      let letter = this.alphabet[idx];

      if (idx === 0) {
        top.push(outerPad + letter + outerPad + '\n');
      } else {
        let innerPad = ' '.repeat(((idx - 1) * 2) + 1)
        top.push(outerPad + letter + innerPad + letter + outerPad + '\n');
      }
    }

    let middle = letter + ' '.repeat(((letterIdx - 1) * 2) + 1) + letter + '\n';

    let bottom = top.slice().reverse();

    return top.join('') + middle + bottom.join('');
  }
}

module.exports = Diamond;
