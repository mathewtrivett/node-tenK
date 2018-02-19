var { Base } = require('./Base.js');

class Holidays extends Base {
  constructor(client) {
    super(client);
  }

  all(options={}) {
    return this.get(`holidays`,options);
  }
}

module.exports = { Holidays };
