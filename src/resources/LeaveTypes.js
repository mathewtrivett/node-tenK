var { Base } = require('./Base.js');

class LeaveTypes extends Base {
  constructor(client) {
    super(client);
  }

  all({options={}}={}) {
    return this.get(`leave_types`,options);
  }

  show({leaveTypeId='',options={}}={}) {
    return this.get(`leave_types/${leaveTypeId}`,options);
  }
}

module.exports = { LeaveTypes };
