var expect = require('chai').expect;
var nock = require('nock');
var TenK = require('../index.js');
var _ = require('underscore');
var { Projects } = require('../src/resources/Projects.js');
var { Users } = require('../src/resources/Users.js');
var { Placeholders } = require('../src/resources/Placeholders.js');
var { Holidays } = require('../src/resources/Holidays.js');
var { Disciplines } = require('../src/resources/Disciplines.js');
var { Approvals } = require('../src/resources/Approvals.js');
var { Roles } = require('../src/resources/Roles.js');
var { LeaveTypes } = require('../src/resources/LeaveTypes.js');
var { TimeEntries, TimeEntryCategories } = require('../src/resources/TimeEntries.js');
var { BillRates } = require('../src/resources/BillRates.js');
var { BudgetItems } = require('../src/resources/BudgetItems.js');
var { ExpenseItemCategories } = require('../src/resources/ExpenseItems.js');


describe('Client',function() {
  describe('#initWithToken', function() {
    // Given we have a API Key
    var token = 'test-token';
    // When we initialise a new client object
    var client = new TenK(token);

    it('should have an auth token matching the given token', function(done) {
      // Then the client should have a token equal to the passed token.
      expect(client.authToken).to.equal(token);
      done();
    });

    it('should have apiBase set to the staging server', function(done) {
      // The apiBase should be set to the staging server.
      expect(client.apiBase).to.match(/vnext/);
      done();
    });

    it('should initialise users and projects resources as properties', function(done) {
      expect(client.projects).to.be.an.instanceof(Projects);
      expect(client.projects.client).to.deep.equal(client);
      expect(client.users).to.be.an.instanceof(Users);
      expect(client.projects.users.client).to.deep.equal(client);
      done();
    });
  });

  describe('#initWithTokenAndAPIBase',function() {
    var token = 'test-token';
    var uri = 'https://api.test.com';
    var client = new TenK(token,uri);

    it('should have a authToken set to the given token', function(done) {
      expect(client.authToken).to.equal(token);
      done();
    });

    it('should have apiBase set to the given uri', function(done) {
      expect(client.apiBase).to.equal(uri);
      done();
    });
  });
});

describe('Client Resources', function() {
  var client = new TenK('test-token');
  var API_BASE = 'https://vnext-api.10000ft.com/api/v1';

  describe("#approvals", function() {
    nock(API_BASE)
      .get('/approvals')
      .reply(200,{"data":[],"paging": {}})
      .post('/approvals', function(body) {

        function checkBody(body) {
          return body.hasOwnProperty('approvables') && body.hasOwnProperty('status');
        };

        function checkApprovables(items) {
          var validKeys = ['id','type','updated_at'];
          var validTypes = ['TimeEntry','ExpenseItem'];
          return items.every(function(item) {
            return _.isEqual(Object.getOwnPropertyNames(item).sort(),validKeys.sort()) && validTypes.includes(item.type);
          }) && Array.isArray(items);
        };

        return checkBody(body) && checkApprovables(body.approvables);
      })
      .reply(201,{"paging": {},"data": []})
      .delete(/approvals\/\d+$/)
      .reply(200);

    it("should be intialised on the client", function(done) {
      expect(client.approvals).to.be.an.instanceof(Approvals);
      expect(client.approvals.client).to.deep.equal(client);
      done();
    });

    it("should return all approvals with a GET request to /approvals", function() {
      var response = client.approvals.all()
      return response.then(function(res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('paging');
      });
    });

    it("should create approvals from a valid POST request", function() {
      var data = {
        approvables: [
          {id:1, type:'TimeEntry', updated_at: new Date().toISOString()},
          {id:2, type:'ExpenseItem', updated_at: new Date().toISOString()},
          {id:3, type:'ExpenseItem', updated_at: new Date().toISOString()},
        ],
        status: 'pending'
      };
      var response = client.approvals.create(data);
      return response.then(function(res) {
        expect(res.statusCode).to.equal(201);
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('paging');
      });
    });

    it("should delete an approval given a valid DELETE request",function() {
      var response = client.approvals.remove(4);
      return response.then(function(res) {
        expect(res.statusCode).to.equal(200);
      });
    });
  });

  describe("#billRates", function() {
    // ideal list call client.billRates.all()
    // expect client.billRates.create(), client.billRates.remove() and billRates.show() to fail

    nock(API_BASE).
    get('/bill_rates');

    it("should be intialised on the client", function(done) {
      expect(client.billRates).to.be.an.instanceof(BillRates);
      expect(client.billRates.client).to.deep.equal(client);
      done();
    });

    it("should do sutin");
  });

  describe("#budgetItems", function() {
    // ideal list call client.budgetItems.all('itemType')
    // ideal show call client.budgetItems.show(4)
    // ideal update call client.budgetItems.update(4,{data object})
    // ideal delete call client.budgetItems.remove(4)
    // expect client.budgetItems.create({budgetItemsobject}) to fail
    it('should be initialised on the client', function(done) {
      expect(client.budgetItems).to.be.an.instanceof(BudgetItems);
      expect(client.budgetItems.client).to.deep.equal(client);
      done();
    });
    it("should do something");
  });

  describe('#disciplines',function() {
    // ideal list call client.disciplines.all()
    // ideal show call client.disciplines.show(4)
    // expect other methods [post,put,delete] to fail
    it('should be initialised on the client', function(done) {
      expect(client.disciplines).to.be.an.instanceof(Disciplines);
      expect(client.disciplines.client).to.deep.equal(client);
      done();
    });
    it("should do something");
  });

  describe("#expenseItemCategories", function(done) {
    // ideal list call client.expenseItemCategories.all()
    // expect other methods to fail
    it('should be initialised on the client', function(done) {
      expect(client.expenseItemCategories).to.be.an.instanceof(ExpenseItemCategories);
      expect(client.expenseItemCategories.client).to.deep.equal(client);
      done();
    });
    it("should do something");
  });

  describe('#holidays',function(done) {
    // ideal list call client.holidays.all()
    it('should be initialised on the client', function(done) {
      expect(client.holidays).to.be.an.instanceof(Holidays);
      expect(client.holidays.client).to.deep.equal(client);
      done();
    });
    it('all() should return a list of all the holidays');
  });

  describe('#leaveTypes',function() {
    // ideal list call client.leaveTypes.all()
    // ideal show call client.leaveTypes.show(4)
    // expect other methods [post,put,delete] to fail
    it("should be initialised on the client",function(done) {
      expect(client.leaveTypes).to.be.an.instanceof(LeaveTypes);
      expect(client.leaveTypes.client).to.deep.equal(client);
      done();
    });
    it("should do something");
  });

  describe('#placeholders',function() {
    // ideal list call client.placeholders.all()
    // ideal show call client.placeholders.show(4)
    // ideal create call client.placeholders.create({title:""})
    // ideal update call client.placeholders.update(4,{title:"newtitle"})
    // ideal delete call client.placeholders.remove(4)
    it("should be initialised on the client",function(done) {
      expect(client.placeholders).to.be.an.instanceof(Placeholders);
      expect(client.placeholders.client).to.deep.equal(client);
      done();
    });
    it('all() should return a list of all the placeholders');
    it('show(placeholderId) should return the placeholder for the given placeholderId');
    it('create(data) should create a new placeholder');
  });

  describe("#timeEntries", function() {
    // ideal list call client.timeEntries.all()
    // ideal show call client.timeEntries.show(4)
    // expect other methods to fail
    it("should be initialised on the client",function(done) {
      expect(client.timeEntries).to.be.an.instanceof(TimeEntries);
      expect(client.timeEntries.client).to.deep.equal(client);
      done();
    });
    it("should do something");
  });

  describe("#timeEntryCategories", function() {
    it("should be initialised on the client",function(done) {
      expect(client.timeEntryCategories).to.be.an.instanceof(TimeEntryCategories);
      expect(client.timeEntryCategories.client).to.deep.equal(client);
      done();
    });
    it("should do something");
  });
})
