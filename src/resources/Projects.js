/**
Projects
*/
export class Projects extends Base {
  constructor(...args) {
    super(...args);
    this.users = new Users(); // Need to pass in a resource type here?
    this.assignments = new Assignments(...args);
    this.billRates = new BillRates(`projects/`,...args);
    this.timeEntries = new TimeEntries(`projects/`,...args);
    this.tags = new Tags(`projects/`,...args);
    this.phases = new Phases(`projects/`,...args);
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
