var expect = require('chai').expect;
var sinon = require('sinon');
var TenK = require('../index.js');

describe('Users', function() {
    // fake server call pattern: server.respondWith(method, url, response);
    var API_BASE = 'https://vnext-api.10000ft.com/api/v1/';
    var client = new TenK('test-token');

    describe('#all', function() {
      // GIVEN
      it('should do something');
      // WHEN
      // THEN
    });

    describe('#show', function() {
      // GIVEN
      // WHEN
      // THEN
    });

    describe('#update', function() {
      // GIVEN
      // WHEN
      // THEN
    });

    describe('#delete', function() {
      // GIVEN
      // WHEN
      // THEN
    });
});


describe("User resources",function() {

  describe("#assignments", function() {
    it("should do something");
  });

  describe("#availability",function() {
    it("should do something");
  });

  describe("#expenseEntries",function() {
    it("should do something");
  });

  describe("#tags",function() {
    it("should do something");
  });

  describe("#timeEntries",function() {
    it("should do something");
  });

});
