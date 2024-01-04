/* eslint-disable no-underscore-dangle */
export default class Car {
  // Check types
  static checkString(str) {
    if (typeof (str) !== 'string') {
      throw new TypeError('Location must be a string');
    }
  }

  constructor(brand, motor, color) {
    // this.constructor.checkString(brand);
    // this.constructor.checkString(motor);
    // this.constructor.checkString(color);
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor();
  }
}
