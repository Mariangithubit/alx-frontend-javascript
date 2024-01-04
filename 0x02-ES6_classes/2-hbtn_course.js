/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  // Check types
  static checkString(str) {
    if (typeof (str) !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  static checkNumber(num) {
    if (typeof (num) !== 'number') {
      throw new TypeError('Length must be a string');
    }
  }

  static checkArrOfStr(arr) {
    if (arr.constructor !== Array) {
      throw new TypeError('Students must be an array');
    }
    for (const student of arr) {
      if (typeof (student) !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
  }

  constructor(name, length, students) {
    this.constructor.checkString(name);
    this.constructor.checkNumber(length);
    this.constructor.checkArrOfStr(students);
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // name setter
  set name(newName) {
    this.constructor.checkString(newName);
    this._name = newName;
  }

  // length setter
  set length(newLength) {
    this.constructor.checkNumber(newLength);
    this._length = newLength;
  }

  // students setter
  set students(newStudents) {
    this.constructor.checkArrOfStr(newStudents);
    this._students = newStudents;
  }
}
