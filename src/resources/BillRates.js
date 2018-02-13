export class BillRates extends Base {
  constructor(resourceType,...args) {
    super(...args);
    this.resourceType = resourceType;
  }

  all(resourceId,options={}) {
    return this.get(`${this.resourceType}${resourceId}/bill_rates`,options);
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
