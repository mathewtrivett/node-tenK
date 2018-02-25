var expect = require('chai').expect;
var nock = require('nock');
var TenK = require('../index.js');
var _ = require('underscore');

var API_BASE = 'https://vnext-api.10000ft.com/api/v1/';
var client = new TenK('test-token');

describe('Users', function() {
    // fake server call pattern: server.respondWith(method, url, response);
    describe('#all', function() {
      nock(API_BASE, { reqheaders:{ 'auth':'test-token'} })
        .get('/users')
        .reply(200,{data:[],paging:{}});

      it('should return all users with a GET request to /users',function() {
        var req = client.users.all();
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.have.property('data');
          expect(res.body).to.have.property('paging');
        });
      });
    });

    describe('#show', function() {
      nock(API_BASE, { reqheaders:{ 'auth':'test-token'} })
        .get(/users\/\d+$/)
        .reply(200,{data:[],paging:{}});
      it('should return user with the given id with a GET to /users/<id>',function() {
        var req = client.users.show(100232);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.have.property('data');
          expect(res.body).to.have.property('paging');
        });
      });
    });

    describe('#update', function() {
      nock(API_BASE, { reqheaders:{ 'auth':'test-token'} })
        .put(/users\/\d+$/,function(body) {
          var props = ["id", "first_name", "last_name", "display_name",
                      "email", "user_type_id", "billable", "hire_date",
                      "termination_date", "mobile_phone", "office_phone",
                      "archived", "archived_at", "deleted", "deleted_at",
                      "account_owner", "invitation_pending", "user_settings",
                      "guid", "employee_number", "role", "discipline",
                      "location", "type", "billability_target", "billrate",
                      "has_login", "login_type", "thumbnail", "created_at", "updated_at"];
          return _.isEqual(Object.getOwnPropertyNames(body).sort(),props.sort());
        })
        .reply(200);

      it('should update the user with the given id with a PUT to /users/<id>',function() {
          var req = client.users.update(100232, {
            "id": 1,
            "first_name": "Chris",
            "last_name": "James",
            "display_name": "Chris James",
            "email": "chris@example.com",
            "user_type_id": 1,
            "billable": true,
            "hire_date": null,
            "termination_date": null,
            "mobile_phone": null,
            "office_phone": null,
            "archived": false,
            "archived_at": null,
            "deleted": false,
            "deleted_at": null,
            "account_owner": false,
            "invitation_pending": false,
            "user_settings": 1376392,
            "guid": "96d769c7-1b4e-4b07-8baf-5ed6f2b915aa",
            "employee_number": null,
            "role": "Senior",
            "discipline": "Program Management",
            "location": "Seattle",
            "type": "User",
            "billability_target": 100,
            "billrate": -1,
            "has_login": true,
            "login_type": "saml",
            "thumbnail": "",
            "created_at": "2015-11-13T20:38:10Z",
            "updated_at": "2015-11-13T20:38:10Z"});
          return req.then(function(res) {
            expect(res.statusCode).to.equal(200);
          });
      });
    });

    describe('#create', function() {
      nock(API_BASE, { reqheaders:{ 'auth':'test-token'} })
        .post('/users',function(body) {
          var props = ["id", "first_name", "last_name", "display_name",
                      "email", "user_type_id", "billable", "hire_date",
                      "termination_date", "mobile_phone", "office_phone",
                      "archived", "archived_at", "deleted", "deleted_at",
                      "account_owner", "invitation_pending", "user_settings",
                      "guid", "employee_number", "role", "discipline",
                      "location", "type", "billability_target", "billrate",
                      "has_login", "login_type", "thumbnail", "created_at", "updated_at"];
          return _.isEqual(Object.getOwnPropertyNames(body).sort(),props.sort());
        })
        .reply(201);

      it('should create a user with a valid POST to /users',function() {
        var req = client.users.create({
          "id": 1,
          "first_name": "Chris",
          "last_name": "James",
          "display_name": "Chris James",
          "email": "chris@example.com",
          "user_type_id": 1,
          "billable": true,
          "hire_date": null,
          "termination_date": null,
          "mobile_phone": null,
          "office_phone": null,
          "archived": false,
          "archived_at": null,
          "deleted": false,
          "deleted_at": null,
          "account_owner": false,
          "invitation_pending": false,
          "user_settings": 1376392,
          "guid": "96d769c7-1b4e-4b07-8baf-5ed6f2b915aa",
          "employee_number": null,
          "role": "Senior",
          "discipline": "Program Management",
          "location": "Seattle",
          "type": "User",
          "billability_target": 100,
          "billrate": -1,
          "has_login": true,
          "login_type": "saml",
          "thumbnail": "",
          "created_at": "2015-11-13T20:38:10Z",
          "updated_at": "2015-11-13T20:38:10Z"});
        return req.then(function(res) {
          expect(res.statusCode).to.equal(201);
        });
      });
    });
});

describe("User resources",function() {

  describe("#assignments", function() {
    nock(API_BASE, { reqheaders:{ 'auth':'test-token'} })
      .get(/users\/\d+\/assignments$/)
      .reply(200,{data:[],paging:{}})
      .get(/users\/\d+\/assignments\/\d+$/)
      .reply(200,{data:[],paging:{}})
      .post(/users\/\d+\/assignments$/)
      .reply(201)
      .delete(/users\/\d+\/assignments\/\d+$/)
      .reply(200)

    it("should list assignments for a given user", function() {
      var req = client.users.assignments.all(4);
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('data').that.is.an('array');
        expect(res.body).to.have.property('paging').that.is.an('object');
      });
    });

    it("should show an assignment for a given user",function() {
      var req = client.users.assignments.show(4,1);
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('data').that.is.an('array');
        expect(res.body).to.have.property('paging').that.is.an('object');
      });
    });

    it("should create an assignment for a user",function() {
      var req = client.users.assignments.create(4);
      return req.then(function(res) {
        expect(res.statusCode).to.equal(201);
      });
    });

    it("should delete an assignment for a user", function() {
      var req = client.users.assignments.remove(4,1);
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
      });
    });
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
