/* eslint-disable no-underscore-dangle */
export default class Building {
  // Check types
  static checkNumber(num) {
    if (typeof (num) !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  constructor(sqft) {
    this.constructor.checkNumber(sqft);
    this._sqft = sqft;
    // if (this.constructor === Building) {
    //   if (Object.prototype.hasOwnProperty.call(this, 'evacuationWarningMessage') === false) {
    //     throw new Error('Heyy!');
    //   }
    // }
    const proto = Object.getPrototypeOf(this);
    const superProto = Building.prototype;
    const methodName = 'evacuationWarningMessage';
    // const missing = Object.getOwnPropertyNames(superProto).find(
    //   (name) => typeof superProto[name] === 'function' && !proto.hasOwnProperty(name)
    // );
    const missing = proto !== superProto
      // && Object.prototype.hasOwnProperty.call(superProto, methodName)
      && !Object.prototype.hasOwnProperty.call(proto, methodName);
    if (missing) throw new Error(`Class extending Building must override ${methodName}`);
  }

  // Getter
  get sqft() {
    return this._sqft;
  }
}
