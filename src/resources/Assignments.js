var { Base } = require('./Base.js');

class Assignments extends Base {
  constructor(resourceType, client) {
    super(client);
    this.resourceType = resourceType;
  }

  all({projectId = '', userId = '', options = {}} = {}) {
    return this.get(`${this.resourceType}${projectId}${userId}/assignments`, options);
  }

  show({projectId = '', userId = '', assignmentId = '', options = {}} = {}) {
    return this.get(`${this.resourceType}${projectId}${userId}/assignments/${assignmentId}`,options);
  }

  create({projectId = '', userId = '', options = {}} = {}) {
    return this.post(`${this.resourceType}${projectId}${userId}/assignments`,options);
  }

  remove({projectId = '', userId = '', assignmentId = '', options = {}} = {}) {
    return this.delete(`${this.resourceType}${projectId}${userId}/assignments/${assignmentId}`);
  }
}

module.exports = { Assignments };
