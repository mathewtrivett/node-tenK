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

  update(resourceId,availabilityId,options={}) {
    return this.put(`${this.resourceType}${resourceId}/availabilities/${availabilityId}`,options);
  }
};

module.exports = {Availabilities};
