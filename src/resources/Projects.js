/**
Projects
*/
export class Projects extends Base {
  constructor(...args) {
    super(...args)
    this.assignments = new Assignments(...args);
    this.billRates = new BillRates(...args);
    this.timeEntries = new TimeEntries(...args);
  }

  all(options={}) {
    return this.list('projects',options);
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
