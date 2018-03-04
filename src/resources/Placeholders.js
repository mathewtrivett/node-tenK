var { Base } = require('./Base.js');

class Placeholders extends Base {
  constructor(client) {
    super(client);
  }

  all({options={}}={}) {
    return this.get(`placeholder_resources`,options);
  }

  show({placeholderId='',options={}}) {
    return this.get(`placeholder_resources/${placeholderId}`, options);
  }

  create({options={}}={}) {
    return this.post(`placeholder_resources`,options);
  }

  update({placeholderId='', options={}}={}) {
    return this.put(`placeholder_resources/${placeholderId}`,options);
  }

  remove({placeholderId=''}={}) {
    return this.delete(`placeholder_resources/${placeholderId}`);
  }

}

module.exports = { Placeholders };
