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
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error("TypeError: name must be a string");
    }
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error("TypeError: length must be a number");
    }
  }

  set students(students) {
    if (Array.isArray(students) && students.every((item) => typeof item === 'string')) {
      this._students = students;
    } else {
      throw new Error("TypeError: students must be an array of strings");
    }
  }
}
