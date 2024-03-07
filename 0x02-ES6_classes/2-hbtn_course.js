export default class HolbertonCourse {
  // constructor
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('TypeError: Name must be a string');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('TypeError: Length must be a number');
    }

    if (Array.isArray(students) && students.every((item) => typeof item === 'string')) {
      this._students = students;
    } else {
      throw new Error('TypeError: Students must be an array of Strings');
    }
  }

  // geters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // seters
  set name(name) {
    this._name = name;
  }

  set length(length) {
    this._length = length;
  }

  set students(students) {
    this._students = students;
  }
}
