var Base = require('.Base,js');

export default class LeaveTypes extends Base {
  constructor(...args) {
    super(...args);
  }

  all(options={}) {
    return this.get(`leave_types`,options);
  }

  show(leaveTypeId,options={}) {
    return this.get(`leave_types/${leaveTypeId}`,options);
  }
}
