var Base = require('.Base.js');

class Assignments extends Base {
  constructor(resourceType,...args) {
    super(...args);
    this.resourceType = resourceType;
  }

  all(resourceId,options={}) {
    return this.get(`${this.resourceType}${resourceId}/assignments`,options);
  }

  show(resourceId,assignmentId,options={}) {
    return this.get(`${this.resourceType}${resourceId}/assignments/${assignmentId}`,options);
  }

  create(resourceId,options={}) {
    return this.post(`${this.resourceType}${resourceId}/assignments`,options);
  }

  update(resourceId,assignmentId,options={}) {
    return this.put(`${this.resourceType}${resourceId}/assignments/${assignmentId}`,options);
  }

  remove(resourceId,assignmentId) {
    return this.delete(`${this.resourceType}${resourceId}/assignments/${assignmentId}`);
  }
}
