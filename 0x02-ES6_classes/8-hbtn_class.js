export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // getters
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // setters
  set size(size) {
    this._size = size;
  }

  set location(location) {
    this._location = location;
  }

  [Symbol.toPrimitive](val) {
    if (val === 'number') {
      return this.size;
    }
    if (val === 'string') {
      return this.location;
    }
    return this;
  }
}
