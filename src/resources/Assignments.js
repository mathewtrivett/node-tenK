var { Base } = require('./Base.js');

class Assignments extends Base {
  constructor(resourceType, client) {
    super(client);
    this.resourceType = resourceType;
  }

  all(options={}) {
    if(!options.options) options.options = {};
    if(!options.projectId) options.projectId = '';
    if(!options.userId) options.userId = '';

    return this.get(`${this.resourceType}${options.projectId}${options.userId}/assignments`, options.options);
  }

  show(options={}) {
    if(!options.options) options.options = {};
    if(!options.projectId) options.projectId = '';
    if(!options.userId) options.userId = '';

    return this.get(`${this.resourceType}${options.projectId}${options.userId}/assignments/${options.assignmentId}`,options.options);
  }

  create(options={}) {
    if(!options.options) options.options = {};
    if(!options.projectId) options.projectId = '';
    if(!options.userId) options.userId = '';

    return this.post(`${this.resourceType}${options.projectId}${options.userId}/assignments`,options.options);
  }

  remove(options={}) {
    if(!options.projectId) options.projectId = '';
    if(!options.userId) options.userId = '';

    return this.delete(`${this.resourceType}${options.projectId}${options.userId}/assignments/${options.assignmentId}`);
  }
}

module.exports = { Assignments };
