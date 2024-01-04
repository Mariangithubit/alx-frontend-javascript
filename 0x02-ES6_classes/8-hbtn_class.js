/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  // Check types
  static checkString(str) {
    if (typeof (str) !== 'string') {
      throw new TypeError('Location must be a string');
    }
  }

  static checkNumber(num) {
    if (typeof (num) !== 'number') {
      throw new TypeError('Size must be a number');
    }
  }

  constructor(size, location) {
    this.constructor.checkNumber(size);
    this.constructor.checkString(location);
    this._size = size;
    this._location = location;
  }

  // Getters
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  valueOf() {
    return this.size;
  }

  toString() {
    return this.location;
  }
}
