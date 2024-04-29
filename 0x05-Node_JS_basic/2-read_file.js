const fs = require('fs')

module.exports = function countStudents(path) {
  try {
    const db = fs.readFileSync(path, 'utf8');
    let numberStudents = 0;
    let fields = {};
    for (line of db.split('\n')) {
      const lineArr = line.split(',')
      // check if line is valid
      if (lineArr.length == 4) {
        // update number of students count
        numberStudents++;

        //update fields and values
      }
    }
    console.log(`Number of students: ${numberStudents - 1}`);
  } catch (e) {
    throw "Cannot load the database";
  }
}
