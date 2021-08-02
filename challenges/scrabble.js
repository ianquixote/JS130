class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static score(word) {
    return new Scrabble(word).score();
  }

  score() {
    if(this.word === null) {
      return 0;
    }

    const scores = [
      [/[aeioulnrst]/g,'1'],
      [/[dg]/g,'2'],
      [/[bcmp]/g,'3'],
      [/[fhvwy]/g,'4'],
      [/[k]/g,'5'],
      [/[jx]/g,'8'],
      [/[qz]/g,'55']
    ]

    let scoreString = this.word.toLowerCase().replace(scores[0][0], scores[0][1]);
    for (let idx = 1; idx < scores.length; idx++) {
      scoreString = scoreString.replace(scores[idx][0], scores[idx][1]);
    }
    return scoreString.split('').reduce((acc, curr) => Number(acc) + Number(curr), 0);
  }
}

module.exports = Scrabble;
