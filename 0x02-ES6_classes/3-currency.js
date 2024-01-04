/* eslint-disable no-underscore-dangle */
export default class Currency {
  // Check types
  static checkString(str) {
    if (typeof (str) !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  constructor(code, name) {
    this.constructor.checkString(code);
    this.constructor.checkString(name);
    this._code = code;
    this._name = name;
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters
  set code(newCode) {
    this.constructor.checkString(newCode);
    this._code = newCode;
  }

  set name(newName) {
    this.constructor.checkString(newName);
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
