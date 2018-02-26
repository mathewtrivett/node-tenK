var { Base } = require('./Base.js');

class Availabilities extends Base {
  constructor(resourceType,client) {
    super(client);
    this.resourceType = resourceType;
  }

  all(resourceId,options={}) {
    return this.get(`${this.resourceType}${resourceId}/availabilities`,options);
  }

  show(resourceId,availabilityId,options={}) {
    return this.get(`${this.resourceType}${resourceId}/availabilities/${availabilityId}`,options);
  }

  create(resourceId,options={}) {
    return this.post(`${this.resourceType}${resourceId}/availabilities`,options);
  }

  update(resourceId,availabilityId,options={}) {
    return this.put(`${this.resourceType}${resourceId}/availabilities/${availabilityId}`,options);
  }

  remove(resourceId,availabilityId) {
    return this.delete(`${this.resourceType}${resourceId}/availabilities/${availabilityId}`);
  }
};

module.exports = {Availabilities};
