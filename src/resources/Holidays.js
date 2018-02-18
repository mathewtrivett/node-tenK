var Base = require('.Base,js');

export default class Holidays extends Base {
  constructor(...args) {
    super(...args);
  }

  all(options={}) {
    return this.get(`holidays`,options);
  }
}
