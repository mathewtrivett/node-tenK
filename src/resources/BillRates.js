var { Base } = require('./Base.js');

class BillRates extends Base {
  constructor(resourceType,client) {
    super(client);
    this.resourceType = resourceType;
  }

  all(resourceId,options={}) {
    if(['projects/'].includes(this.resourceType)) {
      return this.get(`${this.resourceType}${resourceId}/bill_rates`,options);
    } else {
      return this.get(`${this.resourceType}bill_rates`,options);
    }
  }

  show(resourceId,billRateId,options={}) {
    return this.get(`${this.resourceType}${resourceId}/bill_rates/${billRateId}`,options);
  }

  create(resourceId,options={}) {
    return this.post(`${this.resourceType}${resourceId}/bill_rates`,options);
  }

  update(resourceId,billRateId,options={}) {
    return this.put(`${this.resourceType}${resourceId}/bill_rates/${billRateId}`,options);
  }

  remove(resourceId,billRateId) {
    return this.delete(`${this.resourceType}${resourceId}/bill_rates/${billRateId}`);
  }
}

module.exports = {BillRates};
