var expect = require('chai').expect;
var TenK = require('../index.js');
var nock = require('nock');

const API_BASE = 'https://vnext-api.10000ft.com/api/v1';
const client = new TenK('test-token');

describe('Projects', function() {

    nock(API_BASE, { reqheaders:{ 'auth':'test-token'} })
      .get('/projects')
      .reply(200)
      .get(/projects\/\d+$/)
      .reply(200)
      .put(/projects\/\d+$/)
      .reply(200)
      .post('/projects')
      .reply(201)
      .delete(/projects\/\d+$/)
      .reply(200);

    describe("#all",function() {
      it('should return all projects with a GET request to /projects', function() {
        var req = client.projects.all();
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        })
      });
    });

    describe('#show',function() {
      it('should return project with the given id with a GET to /projects/<id>', function() {
        var req = client.projects.show(202);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });
    });

    describe('#update',function() {
      it('should update the project with the given id with a PUT to /projects/<id>',function() {
        var req = client.projects.update(202,{});
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });
    });

    describe('#create',function() {
      it('should create a user with a valid POST to /users',function() {
        var req = client.projects.create({});
        return req.then(function(res) {
          expect(res.statusCode).to.equal(201);
        });
      });
    });

    describe('#remove', function() {
      it('should remove a project by id with DELETE to /projects/<id>', function() {
        var req = client.projects.remove(202);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });
    });

  });

  describe('Project resources', function() {

    var API_BASE = 'https://vnext-api.10000ft.com/api/v1/';

    describe("#assignments",function() {
      nock(API_BASE,{ reqheaders:{ 'auth':'test-token'} })
        .get(/projects\/\d+\/assignments/)
        .reply(200)
        .get(/projects\/\d+\/assignments\/\d+$/)
        .reply(200)

      it('should list all the assignments for a given project with GET to /projects/<id>/assignments',function() {
        var req = client.projects.assignments.all(101);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });

      it('should get a specific assignment for a given project with GET to /projects/<id>/assignments/<id>',function() {
        var req = client.projects.assignments.show(101,1);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });
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
