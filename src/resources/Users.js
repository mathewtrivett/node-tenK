/**
Users
*/
export class Users extends Base {
  constructor(...args) {
    super(...args);
    this.assignments = new Assignments();
    this.availability = new Availabilities();
    this.expenseEntries = new ExpenseEntries();
    this.billRates = new BillRates();
    this.timeEntries = new TimeEntries();
  }

  all(options={}) {
    return this.list('users',options);
  }

  show(userId,options={}) {
    return this.get(`users/${userId}`,options);
  }

  update(userId,options={}) {
    return this.put(`users/${userId}`,options);
  }
}
