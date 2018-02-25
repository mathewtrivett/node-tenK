var expect = require('chai').expect;
var TenK = require('../index.js');
var nock = require('nock');

describe('Projects', function() {
    // fake server call pattern: server.respondWith(method, url, response);
    var API_BASE = 'https://vnext-api.10000ft.com/api/v1/';
    var client = new TenK('test_token');

    nock(API_BASE,{ reqheaders:{ 'auth':'test-token'} })
      .get('/projects')
      .reply(200)
      .get(/projects'\/\d+$/)
      .reply(200)
      .put(/projects'\/\d+$/,function(body) {

      })
      .reply(200)
      .post('/projects',function(body) {

      })
      .reply(201)
      .delete(/projects'\/\d+$/)
      .reply(200);

    describe("#all",function() {
      it('should do something');
    });

    describe('#show',function() {
      it("should do something");
    });

    describe('#update',function() {
      it("should do something");
    });

    describe('#create',function() {
      it("should do something");
    });

    describe('#delete', function() {
      it("should do something");
    });

  });

  describe('Project resources', function() {

    var API_BASE = 'https://vnext-api.10000ft.com/api/v1/';

    describe("#assignments",function() {
      nock(API_BASE,{ reqheaders:{ 'auth':'test-token'} })
        .get(/projects'\/\d+\/assignments/)
        .reply(200)
        .get(/projects'\/\d+\/assignments\/\d+$/)
        .reply(200)
        .put(/projects'\/\d+$/,function(body) {

        })
        .reply(200)
        .post('/projects',function(body) {

        })
        .reply(201)
        .delete(/projects'\/\d+$/)
        .reply(200)
      it("should do something");
    });

    describe("#billRates", function() {
      it("should do something");
    });

    describe('#budgetItems', function() {
      it("should do something");
    });

    describe('#expenseItemCategories',function(){
      it("should do something");
    });

    describe("#phases",function() {
      it("should do something");
    });

    describe('#tags', function() {
      it("should do something");
    });

    describe("#timeEntries",function() {
      it("should do something");
    });

    describe("#timeEntryCategories",function() {
      it("should do something");
    });

    describe('#users', function() {
      it("should do something");
    });
});
