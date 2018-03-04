var { Base } = require('./Base.js');

class Availabilities extends Base {
  constructor(resourceType,client) {
    super(client);
    this.resourceType = resourceType;
  }

  all({userId='',options={}}={}) {
    return this.get(`${this.resourceType}${userId}/availabilities`,options);
  }

  show({ userId='', availabilityId='',options = {}} = {}) {
    return this.get(`${this.resourceType}${userId}/availabilities/${availabilityId}`,options);
  }

  create({userId='',options={}}={}) {
    return this.post(`${this.resourceType}${userId}/availabilities`,options);
  }

  update({userId='',availabilityId='',options={}}={}) {
    return this.put(`${this.resourceType}${userId}/availabilities/${availabilityId}`,options);
  }

  remove({userId='',availabilityId=''}={}) {
    return this.delete(`${this.resourceType}${userId}/availabilities/${availabilityId}`);
  }
};

module.exports = {Availabilities};
