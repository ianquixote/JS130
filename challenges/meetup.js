class Meetup {
  constructor(year, month) {
    this.month = month;
    this.year = year;
  }

  day(weekday, schedule) {
    const DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    weekday = DAYS.indexOf(weekday.toLowerCase());
    let firstDayOfMonth = (new Date(this.year, this.month - 1, 1)).getDay();

    let offset;
    if (firstDayOfMonth > weekday) {
      let daysLeftInWeek = 6 - firstDayOfMonth;
      let startOfWeekToWeekday = weekday + 1;
      offset = daysLeftInWeek + startOfWeekToWeekday;
    } else {
      offset = weekday - firstDayOfMonth;
    }

    let date = 1 + offset;

    if (schedule === 'second') {
      date += 7;
    } else if (schedule === 'third') {
      date += 14;
    } else if (schedule === 'fourth') {
      date += 21;
    } else if (schedule === 'fifth') {
      date += 28;
      if (this.getDate(date).getMonth() !== this.month - 1) {
        return null;
      }
    } else if (schedule === 'last') {
      while (this.getDate(date).getMonth() === this.month - 1) {
        date += 7;
      }
      date -= 7;
    } else if (schedule === 'teenth') {
      date = 13;
      while (this.getDate(date).getDay() !== weekday) {
        date++;
      }
    }
    return this.getDate(date);
  }

  getDate(date) {
    return new Date(this.year, this.month - 1, date);
  }
}

// let date1 = new Meetup(5, 2020);
// console.log(date1.day('sunday', 'first'));
// console.log(date1.day('monday', 'second'));
// console.log(date1.day('tuesday', 'third'));
// console.log(date1.day('wednesday', 'fourth'));
// console.log(date1.day('thursday', 'fifth'));
// console.log(date1.day('friday', 'last'));
// console.log(date1.day('saturday', 'teenth'));

module.exports = Meetup;



//requirements
//case of input does not matter

//the day method returns a date object that corresponds to the scheduled weekday of the
//month and year provided to the Meetup object

//schedule descriptors include
    //first
    //second
    //third
    //fourth
    //fifth - not all months have a fifth specific day
    //last
    //teenth - days that fall on thirteenth through nineteenth

//days of week include full names (case-insensitive)
    //monday
    //tuesday
    //etc.

//if a fifth day does not exist, return null

//months supplied to Date constructor are indexed 0-11
//months supplied to day method are indexed 1-12

//Data structure
//Input to the Meetup constructor consists of numbers representing years and months (1-12)
//Input to the day method consists of strings representing days of week and position within month
  //These strings will need to correspond to numbers that can be provided to the Date constructor
    //Day strings can be part of an array which provides the correct index

    //arrays for each day(mon, tues, etc.) can be created by looping through all days of the month/year which
    //can then be used to select the first-fifth and last element


//ALGORITHM
  //Given a month and year, as well as day (sun-mon) and position of that day in the month, return the exact date
  //To return the exact date, we need the year, month, and date (number from 1-31);
  //So, we need to convert the day/position to the date
      //Knowing the month and year, we can discover which day is the first of the month and use that
      //day to extrapolate which date is any given day/position

          //1. find out which day is the first of the month.
          //*. Set up a date counter.
          //2. find out difference between that day and the input day. Add that difference to date counter.
          //3. for each step up in position (first -> second...), add 7 to date counter.
          //4. use the date counter to create a new Date object with the month and year.
