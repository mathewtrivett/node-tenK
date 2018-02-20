var expect = require('chai').expect;
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

    it('should have objects representing the API resources available at root',function(done) {
      // Then the client should have objects representing the API resources available at root.
      expect(client.projects).to.be.an.instanceof(Projects);
      expect(client.users).to.be.an.instanceof(Users);
      expect(client.holidays).to.be.an.instanceof(Holidays);
      expect(client.billRates).to.be.an.instanceof(BillRates);
      expect(client.budgetItems).to.be.an.instanceof(BudgetItems);
      expect(client.leaveTypes).to.be.an.instanceof(LeaveTypes);
      expect(client.roles).to.be.an.instanceof(Roles);
      expect(client.approvals).to.be.an.instanceof(Approvals);
      expect(client.timeEntries).to.be.an.instanceof(TimeEntries);
      expect(client.timeEntryCategories).to.be.an.instanceof(TimeEntryCategories);
      expect(client.expenseItemCategories).to.be.an.instanceof(ExpenseItemCategories);
      done();
    });

    it('should initialise the client property of attached resources',function(done) {
      // And the client property associated with resources should be the same object as the root client.
      expect(client.projects.client).to.deep.equal(client);
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
  describe('#placeholders',function() {
    it('all() should return a list of all the placeholders');
    it('show(placeholderId) should return the placeholder for the given placeholderId');
    it('create(data) should create a new placeholder');
  });

  describe('#holidays',function() {
    it('all() should return a list of all the holidays');
  });

  describe('#leaveTypes',function() {

  });

  describe('#disciplines',function() {

  });
})
