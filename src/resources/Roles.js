var { Base } = require('./Base.js');

class Roles extends Base {
  constructor(client) {
    super(client);
  }

  all({options={}}={}) {
    return this.get(`roles`,options);
  }

  show({roleId='',options={}}={}) {
    return this.get(`roles/${roleId}`,options);
  }
}

module.exports = { Roles };
