var { Base } = require('./Base.js');
/**
Phases
*/
class Phases extends Base {
  constructor(resourceType,client) {
    super(client);
    this.resourceType = resourceType;
  }

  all({projectId='',options={}}={}) {
    return this.get(`${this.resourceType}${projectId}/phases`,options);
  }

  create({projectId='',options={}}={}) {
    return this.post(`${this.resourceType}${projectId}/phases`,options);
  }

  update({projectId='',phaseId='',options={}}={}) {
    return this.put(`${this.resourceType}${projectId}/phases/${phaseId}`,options);
  }
}

module.exports = {Phases};
