/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing {
  // Check types
  static checkNumber(num) {
    if (typeof (num) !== 'number') {
      throw new TypeError('Length must be a string');
    }
  }

  static checkCurrency(currency) {
    if (currency instanceof Currency === false) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
  }

  constructor(amount, currency) {
    this.constructor.checkNumber(amount);
    this.constructor.checkCurrency(currency);
    this._amount = amount;
    this._currency = currency;
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters
  set amount(newAmount) {
    this.constructor.checkNumber(newAmount);
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    this.constructor.checkCurrency(newCurrency);
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    this.checkNumber(amount);
    this.checkNumber(conversionRate);
    return amount * conversionRate;
  }
}
