var { Base } = require('.Base.js');
var { Assignments } = require('.Assignments.js');
var { BillRates } =  require('.BillRates.js');
var { TimeEntries } = require('.TimeEntries.js');
var { TimeEntryCategories} = require('.TimeEntryCategories.js');
var { Tags } = require('.Tags.js');
var { Phases } = require('.Phases.js');
var { BudgetItems} = require('.BudgetItems.js');
var { ExpenseItemCategories } = require('.ExpenseItems.js');

/**
Projects
*/
export defaults class Projects extends Base {
  constructor(...args) {
    super(...args);
    this.users = new Users(); // Need to pass in a resource type here?
    this.assignments = new Assignments(...args);
    this.billRates = new BillRates(`projects/`,...args);
    this.timeEntries = new TimeEntries(`projects/`,...args);
    this.timeEntryCategories = new TimeEntryCategories('projects/',this);
    this.tags = new Tags(`projects/`,...args);
    this.phases = new Phases(`projects/`,...args);
    this.budgetItems = new BudgetItems(`projects/`,...args);
    this.expenseItemCategories = new ExpenseItemCategories(`projects/`,this);
    this.assignments = new Assignments(`projects/`,this);
  }

  all(options={}) {
    return this.get('projects',options);
  }

  show(projectId,options={}) {
    return this.get(`projects/${projectId}`, options);
  }

  create(options={}) {
    return this.post('projects', options);
  }

  update(projectId,options={}) {
    return this.put(`projects/${projectId}`, options);
  }

  remove(projectId) {
    return this.delete(`projects/${projectId}`);
  }
}
