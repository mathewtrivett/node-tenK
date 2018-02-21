var expect = require('chai').expect;
var sinon = require('sinon');
var TenK = require('../index.js');
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

    it('should have an apiBase set to the staging server',function(done) {
      // The apiBase should be set to the staging server.
      expect(client.apiBase).to.match(/vnext/);
      done();
    });

    it('should initialise users and projects resources as properties',function(done) {
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

    it('should have an apiBase set to the given uri', function(done) {
      expect(client.apiBase).to.equal(uri);
      done();
    });
  });
});

describe('Client Resources', function() {
  var client = new TenK('test-token');

  describe("#approvals", function() {
    it("should be intialised on the client", function(done) {
      expect(client.approvals).to.be.an.instanceof(Approvals);
      expect(client.approvals.client).to.deep.equal(client);
      done();
    });

    it("should should fetch approval objects when .all() is called", function(done) {
      // Given the server has approvals and is responsive to a given uri.
      // When the client calls client.approvals.all().
      var request = sinon.stub(client.approvals, 'all');
      // Then the response status code should be 200.
      // Expect response.data to exist.
      // Expect response.paging to exist.
      done();
    });
  });

  describe("#billRates",function() {
    it("should be initialised on the client",function(done) {
      expect(client.billRates).to.be.an.instanceof(BillRates);
      expect(client.billRates.client).to.deep.equal(client);
      done();
    });

    it("should do something");
  });

  describe("#budgetItems", function() {
    it("should be initialised on the client",function(done) {
      expect(client.budgetItems).to.be.an.instanceof(BudgetItems);
      expect(client.budgetItems.client).to.deep.equal(client);
      done();
    });

    it("should do something");
  });

  describe('#disciplines',function() {
    it("should be initialised on the client",function(done) {
      expect(client.disciplines).to.be.an.instanceof(Disciplines);
      expect(client.disciplines.client).to.deep.equal(client);
      done();
    });

    it("should do something");
  });

  describe("#expenseItemCategories", function() {
    it("should be initialised on the client",function(done) {
      expect(client.expenseItemCategories).to.be.an.instanceof(ExpenseItemCategories);
      expect(client.expenseItemCategories.client).to.deep.equal(client);
      done();
    });

    it("should do something");
  });

  describe('#holidays',function() {
    it("should be initialised on the client",function(done) {
      expect(client.holidays).to.be.an.instanceof(Holidays);
      expect(client.holidays.client).to.deep.equal(client);
      done();
    });
    it('all() should return a list of all the holidays');
  });

  describe('#leaveTypes',function() {
    it("should be initialised on the client",function(done) {
      expect(client.leaveTypes).to.be.an.instanceof(LeaveTypes);
      expect(client.leaveTypes.client).to.deep.equal(client);
      done();
    });
    it("should do something");
  });

  describe('#placeholders',function() {
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
