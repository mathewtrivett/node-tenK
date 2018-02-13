/**
Base is what all other resource modules inherit their methods from.
@param {Client} client - An instance of a TenK client, typically initialised when the Client is created.
*/

export class Base {
  constructor(client) {
    this.client = client;
  }

  get(endpoint,options = {}) {
    return.this.client.get(endpoint,options);
  }

  post(endpoint,options = {}) {
    return.this.client.post(endpoint, options);
  }

  put(endpoint,options = {}) {
    return this.client.put(endpoint,options);
  }

  delete(endpoint,options = {}) {
    return this.client.delete(endpoint,options);
  }
}
