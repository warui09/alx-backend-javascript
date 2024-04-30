const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const db = fs.readFileSync(path, 'utf8');
    let numberStudents = 0;
    const fields = {};
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < db.split('\n').length; i++) {
      const lineArr = db.split('\n')[i].split(',');
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
  } catch (e) {
    // eslint-disable-next-line no-throw-literal
    throw 'Cannot load the database';
  }
};
