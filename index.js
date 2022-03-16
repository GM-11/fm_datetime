
const args = ["dd-mm-yyyyy"];

const fmDateTime = () => {
  /**
   * @param {Date} date - The date
   * @param {string} format - The string
   */

  function getCurrentDate(date , format) {
    let result;
    const DATE = date.getUTCDate()
    const MONTH = date.getUTCMonth() + 1 // +1 since UTC returns month number 1 less
    switch (format) {
      case "dd-mm-yyyy":
        break;

      default:
        break;
    }
  }


  // returns seconds 
  function getSecondsSinceEpoch(date) {
      const milliseconds = date.getTime()
      return milliseconds / 1000  
  }
};

var epoch = new Date(2000, 0, 1, 0, 2, 0, 0);
var cur = new Date()

console.log(cur.getUTCMonth());