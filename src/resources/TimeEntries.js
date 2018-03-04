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

  all({userId='',projectId='',options={}}={}) {
    if(['projects/','users/'].includes(this.resourceType)) {
      return this.get(`${this.resourceType}${userId}${projectId}/time_entries`,options);
    } else {
      return this.get(`${this.resourceType}time_entries`,options);
    }
  }

  show({userId='',projectId='',timeEntryId='',options={}}={}) {
    if(['projects/','users/'].includes(this.resourceType)) {
      return this.get(`${this.resourceType}${userId}${projectId}/time_entries/${timeEntryId}`,options);
    } else {
      options = timeEntryId;
      return this.get(`${this.resourceType}time_entries/${timeEntryId}`,options);
    }
  }

  create({userId='',projectId='',options={}}={}) {
    return this.post(`${this.resourceType}${userId}${projectId}/time_entries`,options);
  }

  update({userId='',projectId='',timeEntryId='',options={}}={}) {
    return this.put(`${this.resourceType}${userId}${projectId}/time_entries/${timeEntryId}`,options);
  }

  remove({userId='',projectId='',timeEntryId=''}={}) {
    return this.delete(`${this.resourceType}${userId}${projectId}/time_entries/${timeEntryId}`);
  }
}


class TimeEntryCategories extends Base {
  constructor(resourceType,client) {
    super(client);
    this.resourceType = resourceType;
  }

  all({projectId='', options={}}={}) {
    if(this.resourceType !== 'projects/') {
      return this.get(`${this.resourceType}time_entry_categories`,options);
    } else {
      return this.get(`${this.resourceType}${projectId}/time_entry_categories`, options);
    }
  }
}

module.exports = { TimeEntries, TimeEntryCategories }
