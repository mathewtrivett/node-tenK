/**
Phases
*/
export class Phases extends Base {
  constructor(resourceType,...args) {
    super(...args);
    this.resourceType = resourceType;
  }

  all(resourceId,options={}) {
    return this.get(`${this.resourceType}${resourceId}/phases`,options);
  }

  create(resourceId,options={}) {
    return this.post(`${this.resourceType}${resourceId}/phases`,options);
  }

  update(resourceId,phaseId,options={}) {
    return this.put(`${this.resourceType}${resourceId}/phases/${phaseId}`,options);
  }
}
