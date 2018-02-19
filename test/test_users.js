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

      var client = new TenK('Wkt0MWJCYVJjb25KVVZNY1VxZTQxeXRTWE1iY1Y4endxQTI5akdaSVh6bGZ4bTVKYlg0ZlZEdFI4SVMwClE1RW5YbjdhNXhYRlZZeE10WFlibkgxRU56TkdDWkFPcEJPOFVUeGFab3ZPdkVZdXNHMUxxK1FBYXVCdgpnZXJIZ0tTSAo=');

      // WHEN
      client.users.all('').then(function(response) {
        console.log(response);
      }).catch(function(error) {
        console.log(error);
      });

      client.projects.budgetItems.all(14138).then(function(response) {
        console.log(response.data[0].phase_name);
      });

      // THEN
    });

    describe('#get', function() {
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
});
