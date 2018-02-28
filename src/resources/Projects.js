var { Base } = require('./Base.js');
var { Assignments } = require('./Assignments.js');
var { BillRates } =  require('./BillRates.js');
var { TimeEntries, TimeEntryCategories } = require('./TimeEntries.js');
var { Tags } = require('./Tags.js');
var { Phases } = require('./Phases.js');
var { BudgetItems} = require('./BudgetItems.js');
var { ExpenseItems, ExpenseItemCategories } = require('./ExpenseItems.js');
var { Users } = require('./Users.js');

/**
Projects
*/
class Projects extends Base {
  constructor(client) {
    super(client);
    this.assignments = new Assignments(`projects/`,client);
    this.billRates = new BillRates(`projects/`, client);
    this.budgetItems = new BudgetItems(`projects/`,client);
    this.expenseItems = new ExpenseItems(`projects/`,client);
    this.expenseItemCategories = new ExpenseItemCategories(`projects/`, client);
    this.phases = new Phases(`projects/`,client);
    this.tags = new Tags(`projects/`,client);
    this.timeEntries = new TimeEntries(`projects/`,client);
    this.timeEntryCategories = new TimeEntryCategories('projects/',client);
    this.users = new Users(`projects/`,client); // Need to pass in a resource type here?
  }

  all(options={}) {
    return this.get('projects',options);
  }

  show(options={}) {
    if(!options.options) options.options = {};
    return this.get(`projects/${options.projectId}`, options.options);
  }

  create(options={}) {
    return this.post('projects', options);
  }

  update(options={}) {
    if(!options.options) options.options = {};
    return this.put(`projects/${options.projectId}`, options.options);
  }

  remove(options) {
    return this.delete(`projects/${options.projectId}`);
  }
}

module.exports = { Projects };
