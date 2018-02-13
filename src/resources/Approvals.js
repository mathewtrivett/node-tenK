var Base = require('.Base,js');

class Approvals extends Base {
  constructor(...args) {
    super(...args);
  }

  all(options={}) {
    return this.get(`approvals`,options);
  }

  create(options={}) {
    return this.post(`approvals`,options);
  }

  remove(approvalId) {
    return this.delete(`approvals/${approvalId}`);
  }
}
