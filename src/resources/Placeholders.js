var Base = require('.Base.js');

export default class Placeholders extends Base {
  constructor(...args) {
    super(...args);
  }

  all(options={}) {
    return this.get(`placeholder_resources`,options);
  }

  show(placeholderResourceId,options={}) {
    return this.get(`placeholder_resources/${placeholderResourceId}`, options);
  }

  create(options = {}) {
    return this.post(`placeholder_resources`,options);
  }

  update(placeholderResourceId, options={}) {
    return this.put(`placeholder_resources`,options);
  }

  remove(placeholderResourceId) {
    return this.delete(`placeholder_resources/${placeholderResourceId}`,options);
  }

}
