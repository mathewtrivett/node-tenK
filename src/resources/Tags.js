var Base = require('.Base.js');

export default class Tags extends Base {
  constructor(resourceType,...args) {
    super(...args);
    this.resourceType = resourceType;
  }

  all(resourceId,options={}) {
    return this.get(`${this.resourceType}${resourceId}/tags`,options);
  }

  create(resourceId,options={}) {
    return this.post(`${this.resourceType}${resourceId}/tags`,options);
  }

  remove(resourceId, tagId,options={}) {
    return this.delete(`${this.resourceType}${resourceId}/tags/${tagId}`,options);
  }
}
