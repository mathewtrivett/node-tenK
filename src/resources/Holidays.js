var Base = require('.Base,js');

class Holidays extends Base {
  constructor(...args) {
    super(...args);
  }

  all(options={}) {
    return this.get(`holidays`,options);
  }
}
