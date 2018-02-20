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
    this.availability = new Availabilities(client);
    this.expenseEntries = new ExpenseItems(client);
    this.tags = new Tags(`users/`,client);
    this.timeEntries = new TimeEntries(`users/`,client);
  }

  all(resourceId,options={}) {
    return this.get(`${this.resourceType}${resourceId}/users`,options);
  }

  show(resourceId,userId,options={}) {
    return this.get(`${this.resourceType}${resourceId}users/${userId}`, options);
  }

  update(userId,options={}) {
    return this.put(`users/${userId}`,options);
  }
}

module.exports = { Users };
