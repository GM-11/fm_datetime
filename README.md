<h2> fm_date </h2>
This package is for formatting date according to specefic needs

To start working, import and make an instance of the fm_date module
```
const fmDate = require('fm_date');

const fm = new fmDate();

```

<h3>Methods</h3>

|   Method                    |         Arguments           |         Functionality           |
| --------------------------- | --------------------------- | --------------------------      |
| formatDate()                | date: Date , format: String | Returns date as per format      |
|   months()                  |           none              | Returns months in array         |
| getSecondsSineEpoch()       |  date: Date                 | Returns seconds since epoch     |
| getMillisecondsSineEpoch()  |  date: Date                 | Returns milliseconds since epoch|
| getSecondsSinceEpoch()      |  date: Date                 | Returns seconds since epoch     |
| getMillisecondsSinceEpoch() |  date: Date                 | Returns milliseconds since epoch|
| getMonth()                  |  date: Date                 | Returns month                   |
| getDay()                    |  date: Date                 | Returns Day  of week            |
| getYear()                   |  date: Date                 | Returns Year                    |