/**
 * Read a file asynchronously
 */

const fs = require('fs');

let numberStudents = 0;
const fields = {};

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('Cannot load the database');
    } else {
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i < data.split('\n').length; i++) {
        const lineArr = data.split('\n')[i].split(',');
        // check if line is valid
        if (lineArr.length === 4) {
        // update number of students count
        // eslint-disable-next-line no-plusplus
          numberStudents++;

          // update fields and values
          const field = lineArr[3];
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(lineArr[0]);
        }
      }
      console.log(`Number of students: ${numberStudents}`);
      Object.entries(fields).forEach(([key, value]) => {
        console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      });

      resolve();
    }
  });
});

module.exports = countStudents;
