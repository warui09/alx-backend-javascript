export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new Error('TypeError: code must be a string');
    }

    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('TypeError: name must be a string');
    }
  }

  // getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // setters
  set code(code) {
    this._code = code;
  }

  set name(name) {
    this._name = name;
  }

  // method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
