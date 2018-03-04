var { Base } = require('./Base.js');

class Disciplines extends Base {
  constructor(client) {
    super(client);
  }

  all({options={}}={}) {
    return this.get(`disciplines`,options);
  }

  show({disciplineId='',options={}}={}) {
    return this.get(`disciplines/${disciplineId}`);
  }
}

module.exports = { Disciplines };
