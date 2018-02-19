var expect = require('chai').expect;
var sinon = require('sinon');
var TenK = require('../index.js');

describe('Users', function() {
    // fake server call pattern: server.respondWith(method, url, response);
    var API_BASE = 'https://vnext-api.10000ft.com/api/v1/';
    var users = require('./data/users.json');

    describe('#all', function() {
      // GIVEN
      // var server = sinon.createFakeServer();
      // server.respondWith('GET', `${API_BASE}users`, JSON.stringify(users));
      var client = new TenK('test-token');

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
