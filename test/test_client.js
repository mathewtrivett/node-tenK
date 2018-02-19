var expect = require('chai').expect;
var TenK = require('../index.js');

describe('Client',function() {
  describe('#initWithToken', function() {
    it('should be created', function(done) {
      // Given we have a API Key
      var token = 'fake-token';
      // When we initialise a new client object
      var client = new TenK(token);
      // Then the client should have a token equal to the passed token.
      expect(client.authToken).to.equal(token);
      expect(client.apiBase).to.match(/vnext/);
      // Then the client should have objects representing the different resources.
      expect(client).to.have.property('projects');
      // And the client property associated with resources should be the same object as the root client.
      expect(client.projects.client).to.deep.equal(client);
      expect(client.projects.users.client).to.deep.equal(client);
      done();
    });
  });

  describe('#initWithTokenAndAPIBase',function() {
    // GIVEN
    // WHEN
    // THEN
  });
});
