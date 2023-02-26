const fs = require('fs');
const CSVParser = require('csv-parser');

const filename = 'test.csv';

fs.createReadStream(filename)
  .pipe(CSVParser())
  .on('data', (row, count) => {
    if (count <= 20) {
      console.log(row);
    } else {
      return;
    }
  });
