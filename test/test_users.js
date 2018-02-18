var expect = require('chai').expect;
var sinon = require('sinon');

describe('Users', function() {
    var server;
    // fake server call pattern: server.respondWith(method, url, response);

    beforeEach(function() {
      server = sinon.createFakeServer();
    });

    describe('#get', function() {
      // GIVEN
      // WHEN
      // THEN
    });

    describe('#list', function() {
      // GIVEN
      // WHEN
      // THEN
    });

    describe('#put', function() {
      // GIVEN
      // WHEN
      // THEN
    });

    describe('#delete', function() {
      // GIVEN
      // WHEN
      // THEN
    });

    afterEach(function() {
        server.restore();
    });
});
