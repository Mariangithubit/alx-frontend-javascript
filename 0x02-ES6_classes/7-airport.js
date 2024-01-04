/* eslint-disable no-underscore-dangle */
export default class Airport {
  // Check types
  static checkString(str) {
    if (typeof (str) !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  constructor(name, code) {
    this.constructor.checkString(name);
    this.constructor.checkString(code);
    this._name = name;
    this._code = code;
  }

  // Getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return `${this.code}`;
  }
}
