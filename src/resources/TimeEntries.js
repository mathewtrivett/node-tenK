var Base = require('.Base.js');

/**
TimeEntries can be requested from the API's Base, from Projects or Users.

@param {string} resourceType - A slug for the resource type on init. `` = API_BASE, `users/` = Users and `projects/` = Projects.
@param {...args} args - 
*/

class TimeEntries extends Base {
  constructor(resourceType,...args) {
    super(...args);
    this.resourceType = resourceType;
  }

  all(resourceId,options={}) {
    return this.get(`${this.resourceType}${resourceId}/time_entries`,options);
  }

  show(resourceId,timeEntryId,options={}) {
    return this.get(`${this.resourceType}${resourceId}/time_entries/${timeEntryId}`,options);
  }

  update(resourceId,timeEntryID,options={}) {
    return this.put(`${this.resourceType}${resourceId}/time_entries/${timeEntryId}`,options);
  }

  remove(resourceId,timeEntryID) {
    return this.delete(`${this.resourceType}${resourceId}/time_entries/${timeEntryId}`);
  }
}
