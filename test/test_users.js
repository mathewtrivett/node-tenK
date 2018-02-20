var expect = require('chai').expect;
var sinon = require('sinon');
var TenK = require('../index.js');

describe('Users', function() {
    // fake server call pattern: server.respondWith(method, url, response);
    var API_BASE = 'https://vnext-api.10000ft.com/api/v1/';
    var users = require('./data/users.json');
    var client = new TenK('test-token');

    describe('#all', function() {
      // GIVEN
      // var server = sinon.createFakeServer();
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
  describe('#tags',function() {
    it("should do something");
  });

  describe("#assignments", function() {

  });

  describe("#availability",function() {

  });

  describe("#expenseEntries",function() {

  });

  describe("#timeEntries",function() {

  });

  describe("#tags",function() {

  });
});
