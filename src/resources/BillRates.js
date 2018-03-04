var { Base } = require('./Base.js');

class BillRates extends Base {
  constructor(resourceType,client) {
    super(client);
    this.resourceType = resourceType;
  }

  all({projectId='',options={}}={}) {
    if(this.resourceType !== 'projects/') {
      return this.get(`${this.resourceType}bill_rates`,options);
    } else {
      return this.get(`${this.resourceType}${projectId}/bill_rates`,options);
    }
  }

  show({projectId='',billRateId='',options={}}={}) {
    return this.get(`${this.resourceType}${projectId}/bill_rates/${billRateId}`,options);
  }

  create({projectId='',options={}}={}) {
    return this.post(`${this.resourceType}${projectId}/bill_rates`,options);
  }

  update({projectId='',billRateId='',options={}}={}) {
    return this.put(`${this.resourceType}${projectId}/bill_rates/${billRateId}`,options);
  }

  remove({projectId='',billRateId=''}) {
    return this.delete(`${this.resourceType}${projectId}/bill_rates/${billRateId}`);
  }
}

module.exports = {BillRates};
