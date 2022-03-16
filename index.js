class fmDate {
  months() {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  }

  daysOfWeek() {
    return [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  }

  /**
   * @param {Date} date - The date
   * @param {string} format - The string
   */

  formatDate(date, format) {
    const DATE = date.getDate();
    const MONTH = date.getMonth();
    const YEAR = date.getFullYear();

    let splitted;
    let seperator;
    if (format.includes("-")) {
      splitted = format.split("-");
      seperator = "-";
    } else if (format.includes("/")) {
      splitted = format.split("/");
      seperator = "/";
    } else if (format.includes(" ")) {
      splitted = format.split(" ");
      seperator = " ";
    }

    for (var i = 0; i < splitted.length; i++) {
      if (splitted[i].includes("d")) {
        splitted[i] = `${DATE}`;
      }

      {
        if (splitted[i] === "month") {
          splitted[i] = `${this.Months()[MONTH - 1]}`;
        } else if (splitted[i].includes("m")) {
          splitted[i] = `${MONTH}`;
        }
      }

      if (splitted[i].includes("y")) {
        splitted[i] = `${YEAR}`;
      }
    }
    return splitted.join(seperator);
  }

  /**
   * @param {Date} date - The date
   */

  getSecondsSinceEpoch(date) {
    const DATE = date.getDate();
    const MONTH = date.getMonth();
    const YEAR = date.getFullYear();

    const secondsInDate = DATE * 86400;
    const secondsInMonth = MONTH * 2678400;
    const secondsInYear = YEAR * 31536000;

    return secondsInDate + secondsInMonth + secondsInYear;
  }
  getMillisecondsSinceEpoch(date) {
    const DATE = date.getDate();
    const MONTH = date.getMonth();
    const YEAR = date.getFullYear();

    const milliSecondsInDate = DATE * 86400000;
    const milliSecondsInMonth = MONTH * 2678400000;
    const milliSecondsInYear = YEAR * 31536000000;

    return milliSecondsInDate + milliSecondsInMonth + milliSecondsInYear;
  }

  getMonth(date) {
    return this.months()[date.getMonth()];
  }
  getDay(date) {
    return this.daysOfWeek()[date.getDay()];
  }
  getYear(date) {
    return date.getFullYear();
  }
}

export default fmDate;
