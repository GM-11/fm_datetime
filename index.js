const args = ["dd-mm-yyyyy"];

class fmDateTime {
  /**
   * @param {Date} date - The date
   * @param {string} format - The string
   */

  getFormattedCurrentDate(date, format) {
    const DATE = date.getUTCDate();
    const MONTH = date.getUTCMonth() + 1; // +1 since UTC returns month number 1 less
    const YEAR = date.getUTCFullYear();

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
      if (splitted[i].includes("m")) {
        splitted[i] = `${MONTH}`;
      }
      if (splitted[i].includes("y")) {
        splitted[i] = `${YEAR}`;
      }
    }
    return splitted.join(seperator);
  }

  // returns seconds
  getSecondsSinceEpoch(date) {
    const milliseconds = date.getTime();
    return milliseconds / 1000;
  }
}
