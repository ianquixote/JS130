class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  match(list) {
    return list.filter(item => this.isAnagram(item.toLowerCase()))
  }

  isAnagram(item) {
    if (item === this.word) {
      return false;
    }

    item = item.split('').sort().join('');
    let word = this.word.split('').sort().join('');

    return item === word;
  }
}

//the match function takes a list and returns a new list containing the items in
//the first list that are anagrams of the value held in the word property

//the isAnagram method checks if an item is an anagram of the word.

//An item is an anagram of the word if:
//The item contains all of the same characters in a different order, and
//does not contain any extra characters
//the item is not identical to the word
//Anagrams are case-insensitive

//no matches returns an empty array
module.exports = Anagram;
