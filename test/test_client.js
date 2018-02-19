var expect = require('chai').expect;
var TenK = require('../index.js');

describe('Client',function() {
  describe('#initWithToken', function() {
    it('should be created', function(done) {
      var token = 'fake-token';
      var client = new TenK(token);
      expect(client).to.have.property('projects');
      expect(client.projects.client).to.deep.equal(client);
      expect(client.projects.users.client).to.deep.equal(client);
      done();
    });
    // GIVEN
    // WHEN
    // THEN
  });

  describe('#initWithTokenAndAPIBase',function() {
    var client = new TenK('badtoken');
    // GIVEN
    // WHEN
    // THEN
  });
});
