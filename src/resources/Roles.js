var { Base } = require('./Base.js');

class Roles extends Base {
  constructor(...args) {
    super(...args);
  }

  all(options={}) {
    return this.get(`roles`,options);
  }

  show(roleId,options={}) {
    return this.get(`roles/${roleId}`,options);
  }
}

module.exports = { Roles };
