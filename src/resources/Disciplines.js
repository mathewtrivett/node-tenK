var Base = require('.Base,js');

class Disciplines extends Base {
  constructor(...args) {
    super(...args);
  }

  all(options={}) {
    return this.get(`disciplines`,options);
  }

  show(disciplineId,options={}) {
    return this.get(`disciplines/${disciplineId}`);
  }
}
