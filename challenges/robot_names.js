class Robot {
  constructor() {
    this.robotName = Robot.setName();
  }

  static usedNames = [];

  static setName() {
    let name, let1, let2, dig1, dig2, dig3;
    do {
      let1 = Robot.randomLetter();
      let2 = Robot.randomLetter();
      dig1 = Robot.randomDigit();
      dig2 = Robot.randomDigit();
      dig3 = Robot.randomDigit();
      name = [let1, let2, dig1, dig2, dig3].join('');
    } while (Robot.usedNames.includes(name));
    Robot.usedNames.push(name);
    return name;
  }

  static randomLetter() {
    const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return LETTERS[Math.floor(Math.random() * LETTERS.length)];
  }

  static randomDigit() {
    const DIGITS = '0123456789';
    return DIGITS[Math.floor(Math.random() * DIGITS.length)];
  }

  name() {
    return this.robotName;
  }

  reset() {
    this.robotName = Robot.setName();
  }
}

module.exports = Robot;
