class Clock {
  static at(hours, mins) {
    let obj = {
      toString() {
        let minutes, hours;
        if (String(this.mins).length === 1) {
          minutes = '0' + String(this.mins);
        } else {
          minutes = String(this.mins);
        }

        if (String(this.hours).length === 1) {
          hours = '0' + String(this.hours);
        } else {
          hours = String(this.hours);
        }

        return hours + ':' + minutes;
      },

      add(mins) {
        this.hours += Math.floor(mins / 60);
        this.hours %= 24;
        this.mins += mins % 60;
        this.mins %= 60;
        return obj;
      },

      subtract(mins) {
        let totalMins = (this.hours * 60) + this.mins;
        let minsPerDay = 24 * 60;
        let difference = totalMins - mins;
        if (difference >= 0) {
          this.hours = Math.floor(difference / 60);
          this.mins = difference % 60;
        } else {
          difference = Math.abs(difference) % minsPerDay;
          let minsFromZero = minsPerDay - difference;
          this.hours = Math.floor(minsFromZero / 60);
          this.mins = minsFromZero % 60;
        }
        return obj;
      },

      isEqual(clock) {
        return this.hours === clock.hours && this.mins === clock.mins;
      }
    };

    if (mins === undefined) {
      obj.mins = 0;
    } else {
      hours += Math.floor(mins / 60);
      obj.mins = mins % 60;
    }
    obj.hours = hours % 24;
    return obj;
  }
}

module.exports = Clock;
