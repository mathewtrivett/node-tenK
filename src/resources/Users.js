var { Base } = require('./Base.js');
var { Assignments } = require('./Assignments.js');
var { TimeEntries } = require('./TimeEntries.js');
var { Tags } = require('./Tags.js');
var { Availabilities} = require('./Availabilities.js');
var { ExpenseItems } = require('./ExpenseItems.js');

/**
Users
*/
class Users extends Base {
  constructor(resourceType, client) {
    super(client);
    this.resourceType = resourceType;
    this.assignments = new Assignments('users/',client);
    this.availability = new Availabilities('users/',client);
    this.expenseEntries = new ExpenseItems('users/',client);
    this.tags = new Tags(`users/`,client);
    this.timeEntries = new TimeEntries(`users/`,client);
  }

  all({projectId='', options={}}={}) {
    if(this.resourceType !== 'projects/') {
      return this.get(`${this.resourceType}users`,options);
    } else {
      return this.get(`${this.resourceType}${projectId}/users`,options);
    }
  }

  show({userId='',options={}}={}) {
    return this.get(`${this.resourceType}users/${userId}`, options);
  }

  create({options={}}= {}) {
    return this.post(`users`, options);
  }

  update({userId='',options={}}={}) {
    return this.put(`users/${userId}`,options);
  }
}

module.exports = { Users };
