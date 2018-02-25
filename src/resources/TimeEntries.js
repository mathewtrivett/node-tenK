var { Base } = require('./Base.js');

/**
TimeEntries can be requested from the API's Base, from Projects or Users.

@param {string} resourceType - A slug for the resource type on init. `` = API_BASE, `users/` = Users and `projects/` = Projects.
@param {...args} args -
*/

class TimeEntries extends Base {
  constructor(resourceType,client) {
    super(client);
    this.resourceType = resourceType;
  }

  all(resourceId,options={}) {
    if (arguments.length <=1) {
      return this.get(`${this.resourceType}time_entries`,options);
    } else {
      return this.get(`${this.resourceType}${resourceId}/time_entries`,options);
    }
  }

  show(resourceId,timeEntryId,options={}) {
    if (arguments.length <=2) {
      options = timeEntryId;
      return this.get(`${this.resourceType}time_entries/${resourceId}`,options);
    } else {
      return this.get(`${this.resourceType}${resourceId}/time_entries/${timeEntryId}`,options);
    }
  }

  update(resourceId,timeEntryID,options={}) {
    return this.put(`${this.resourceType}${resourceId}/time_entries/${timeEntryId}`,options);
  }

  remove(resourceId,timeEntryID) {
    return this.delete(`${this.resourceType}${resourceId}/time_entries/${timeEntryId}`);
  }
}


class TimeEntryCategories extends Base {
  constructor(resourceType,client) {
    super(client);
    this.resourceType = resourceType;
  }

  all(options={}) {
    return this.get(`${this.resourceType}time_entry_categories`,options);
  }
}

module.exports = { TimeEntries, TimeEntryCategories }
