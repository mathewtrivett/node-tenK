/**
Users
*/
export class Users extends Base {
  constructor(resourceType,...args) {
    super(...args);
    this.resourceType = resourceType;
    this.assignments = new Assignments(...args);
    this.availability = new Availabilities();
    this.expenseEntries = new ExpenseEntries();
    this.timeEntries = new TimeEntries(`users/`,...args);
    this.tags = new Tags(`users/`,...args);
    this.assignments = new Assignments('users/',...args);
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
