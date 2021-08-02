class BeerSong {
  static verse(num) {
    if (num >= 3) {
      return `${num} bottles of beer on the wall, ${num} bottles of beer.\n` +
             `Take one down and pass it around, ${num - 1} bottles of beer ` +
             "on the wall.\n";
    } else if (num === 2) {
      return "2 bottles of beer on the wall, 2 bottles of beer.\n" +
             "Take one down and pass it around, 1 bottle of beer " +
             "on the wall.\n";
    } else if (num === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
             "Take it down and pass it around, no more bottles of beer " +
             "on the wall.\n";
    } else if (num === 0) {
      return "No more bottles of beer on the wall, no more " +
             "bottles of beer.\nGo to the store and buy some " +
             "more, 99 bottles of beer on the wall.\n"
    }
  }

  static verses(start, end) {
    let lines = '';
    for (let count = start; count >= end; count--) {
      if (count === end) {
        lines += this.verse(count);
      } else {
        lines += this.verse(count) + "\n";
      }
    }
    return lines;
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

module.exports = BeerSong;
