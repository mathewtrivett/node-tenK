var { Base } = require('./Base.js');

class Tags extends Base {
  constructor(resourceType,...args) {
    super(...args);
    this.resourceType = resourceType;
  }

  all({userId='',projectId='',options={}}={}) {
    return this.get(`${this.resourceType}${userId}${projectId}/tags`,options);
  }

  create({userId='',projectId='',options={}}={}) {
    return this.post(`${this.resourceType}${userId}${projectId}/tags`,options);
  }

  remove({userId='',projectId='',tagId='',options={}}={}) {
    return this.delete(`${this.resourceType}${userId}${projectId}/tags/${tagId}`,options);
  }
}

module.exports = {Tags};
