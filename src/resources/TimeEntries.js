var { Base } = require('./Base.js');

/**
TimeEntries can be requested from the API's Base, Projects or Users.

@param {string} resourceType - A slug for the resource type on init. `` = API_BASE, `users/` = Users and `projects/` = Projects.
@param {...args} args -
*/

class TimeEntries extends Base {
  constructor(resourceType,client) {
    super(client);
    this.resourceType = resourceType;
  }

  all(resourceId,options={}) {
    if(['projects/','users/'].includes(this.resourceType)) {
      return this.get(`${this.resourceType}${resourceId}/time_entries`,options);
    } else {
      return this.get(`${this.resourceType}time_entries`,options);
    }
  }

  show(resourceId,timeEntryId,options={}) {
    if(['projects/','users/'].includes(this.resourceType)) {
      return this.get(`${this.resourceType}${resourceId}/time_entries/${timeEntryId}`,options);
    } else {
      options = timeEntryId;
      return this.get(`${this.resourceType}time_entries/${resourceId}`,options);
    }
  }

  create(resourceId,options={}) {
    return this.post(`${this.resourceType}${resourceId}/time_entries`,options);
  }

  update(resourceId,timeEntryId,options={}) {
    return this.put(`${this.resourceType}${resourceId}/time_entries/${timeEntryId}`,options);
  }

  remove(resourceId,timeEntryId) {
    return this.delete(`${this.resourceType}${resourceId}/time_entries/${timeEntryId}`);
  }
}


class TimeEntryCategories extends Base {
  constructor(resourceType,client) {
    super(client);
    this.resourceType = resourceType;
  }

  all(resourceId, options={}) {
    if(['projects/'].includes(this.resourceType)) {
      return this.get(`${this.resourceType}${resourceId}/time_entry_categories`,options);
    } else {
      return this.get(`${this.resourceType}time_entry_categories`,options);
    }
  }
}

module.exports = { TimeEntries, TimeEntryCategories }
