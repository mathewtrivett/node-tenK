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
    nock(API_BASE, { reqheaders:{ 'auth':'test-token'} })
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
      var req = client.approvals.all()
      return req.then(function(res) {
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
      var req = client.approvals.create({options:data});
      return req.then(function(res) {
        expect(res.statusCode).to.equal(201);
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('paging');
      });
    });

    it("should delete an approval given a valid DELETE request",function() {
      var req = client.approvals.remove({ approvalId: 4 });
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
      });
    });
  });

  describe("#billRates", function() {
    // ideal list call client.billRates.all()
    // expect client.billRates.create(), client.billRates.remove() and billRates.show() to fail

    nock(API_BASE, { reqheaders:{ 'auth':'test-token'} })
      .get('/bill_rates')
      .reply(200,{'data':[],'paging':{}});

    it("should be intialised on the client", function(done) {
      expect(client.billRates).to.be.an.instanceof(BillRates);
      expect(client.billRates.client).to.deep.equal(client);
      done();
    });

    it("should return account specific bill rates with a GET to /bill_rates",function() {
      var req = client.billRates.all();
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('paging');
      });
    });
  });

  describe("#budgetItems", function() {
    nock(API_BASE, { reqheaders:{ 'auth':'test-token'} })
      .get('/budget_items')
      .query(function(query) {
        var validItemTypes = ['TimeFees','TimeFeesDays','Expenses'];
        return query.hasOwnProperty('item_type') && validItemTypes.includes(query.item_type);
      })
      .reply(200,{'data':[],'paging':{}})
      .get(/budget_items\/\d+$/)
      .reply(200)
      .put(/budget_items\/\d+$/,function(body) {
        return body.hasOwnProperty('amount');
      })
      .reply(200)
      .delete(/budget_items\/\d+$/)
      .reply(200);

    it('should be initialised on the client', function(done) {
      expect(client.budgetItems).to.be.an.instanceof(BudgetItems);
      expect(client.budgetItems.client).to.deep.equal(client);
      done();
    });

    it('should fetch all the Time Fees with GET to /budget_items', function() {
      var req = client.budgetItems.all({options:{item_type:'TimeFees'}});
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('paging');
      });
    });

    it('should return a budget item by ID with GET to /budget_items/<id>', function() {
      var req = client.budgetItems.show({budgetItemId:4})
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
      });
    });

    it('should update a budget item by ID with PUT to /budget_items/<id>', function() {
      var req = client.budgetItems.update({budgetItemId:4, options:{amount:1001}});
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
      });
    });

    it('should delete a budget item by ID with DELETE to /budget_items/<id>', function() {
      var req = client.budgetItems.remove({budgetItemId:4});
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
      });
    });
  });

  describe('#disciplines',function() {
    nock(API_BASE, { reqheaders:{ 'auth':'test-token'} })
      .get('/disciplines')
      .reply(200,{'data':[],'paging':{}})
      .get(/disciplines\/\d+$/)
      .reply(200, { 'data':[], 'paging':{} });

    it('should be initialised on the client', function(done) {
      expect(client.disciplines).to.be.an.instanceof(Disciplines);
      expect(client.disciplines.client).to.deep.equal(client);
      done();
    });

    it('should return all disciplines for an account with GET to /disciplines', function() {
      var req = client.disciplines.all();
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('paging');
      });
    });

    it('should return a discipline with a GET to /disciplines/<id>', function() {
      var req = client.disciplines.show(10000);
      return req.then(function(res){
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('paging');
      });
    })
  });

  describe("#expenseItemCategories", function(done) {
    nock(API_BASE,{ reqheaders:{ 'auth':'test-token'} })
      .get('/expense_item_categories')
      .reply(200,{'data':[],'paging':{}});

    it('should be initialised on the client', function(done) {
      expect(client.expenseItemCategories).to.be.an.instanceof(ExpenseItemCategories);
      expect(client.expenseItemCategories.client).to.deep.equal(client);
      done();
    });

    it("should return a expense item categories with GET to /expense_item_categories", function () {
      var req = client.expenseItemCategories.all();
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
      });
    });
  });

  describe('#holidays',function(done) {
    nock(API_BASE, { reqheaders:{ 'auth':'test-token'} })
      .get('/holidays')
      .reply(200,{'data':[],'paging':{}});

    it('should be initialised on the client', function(done) {
      expect(client.holidays).to.be.an.instanceof(Holidays);
      expect(client.holidays.client).to.deep.equal(client);
      done();
    });

    it('should return holidays with a GET to /holidays', function() {
      var req = client.holidays.all();
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
      });
    });
  });

  describe('#leaveTypes',function() {
    nock(API_BASE, { reqheaders:{ 'auth':'test-token'} })
      .get('/leave_types')
      .reply(200,{'data':[],'paging':{}})
      .get(/leave_types\/\d+$/)
      .reply(200,{'data':[],'paging':{}});

    it('should be initialised on the client',function(done) {
      expect(client.leaveTypes).to.be.an.instanceof(LeaveTypes);
      expect(client.leaveTypes.client).to.deep.equal(client);
      done();
    });

    it('should return leave types with a GET to /leave_types', function() {
      var req = client.leaveTypes.all();
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('paging');
      });
    });

    it('should return a leave type by id with GET to /leave_types/<id>', function() {
      var req = client.leaveTypes.show(100000);
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('paging');
      })
    });
  });

  describe('#placeholders',function() {
    nock(API_BASE, { reqheaders:{ 'auth':'test-token'} })
      .get('/placeholder_resources')
      .reply(200,{data:[],paging:{}})
      .get(/placeholder_resources\/\d+$/)
      .reply(200,{data:[],paging:{}})
      .post('/placeholder_resources',function(body) {
        return body.hasOwnProperty('title');
      })
      .reply(201)
      .put(/placeholder_resources\/\d+$/,function(body) {
        return body.hasOwnProperty('title');
      })
      .reply(200)
      .delete(/placeholder_resources\/\d+$/)
      .reply(200)

    it("should be initialised on the client",function(done) {
      expect(client.placeholders).to.be.an.instanceof(Placeholders);
      expect(client.placeholders.client).to.deep.equal(client);
      done();
    });

    it('should return placeholders with GET to /placeholder_resources',function() {
      var req = client.placeholders.all();
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('data').that.is.an('array');
        expect(res.body).to.have.property('paging').that.is.an('object');
      })
    });

    it('should return a placeholder by id with GET to /placeholder_resources/<id>',function() {
      var req = client.placeholders.show(4);
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('data').that.is.an('array');
        expect(res.body).to.have.property('paging').that.is.an('object');
      });
    });

    it('should create a placeholder with valid POST to /placeholder_resources',function() {
      var req = client.placeholders.create({title:'Placeholder test'});
      return req.then(function(res) {
        expect(res.statusCode).to.equal(201);
      });
    });

    it('should update a placeholder by id with PUT to /placeholder_resources/<id>',function() {
      var req = client.placeholders.update(4,{title:'New title'});
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
      });
    });

    it('should delete a placeholder by id with DELETE to /placeholder_resources/<id>',function() {
      var req = client.placeholders.remove(4);
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
      })
    });
  });

  describe("#roles",function() {
    nock(API_BASE, { reqheaders:{ 'auth':'test-token'} })
      .get(/roles/)
      .reply(200)
      .get(/roles\/\d+$/)
      .reply(200);

    it('should list all the roles on account with GET to /roles',function() {
      var req = client.roles.all();
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
      })
    });

    it('should list an individual role on with a GET to /roles/<id>',function() {
      var req = client.roles.show(808);
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
      });
    });
  });

  describe("#timeEntries", function() {
    nock(API_BASE, { reqheaders:{ 'auth':'test-token'} })
      .get('/time_entries')
      .reply(200,{data:[],paging:{}})
      .get(/time_entries\/\d+$/)
      .reply(200,{data:[],paging:{}});

    it("should be initialised on the client",function(done) {
      expect(client.timeEntries).to.be.an.instanceof(TimeEntries);
      expect(client.timeEntries.client).to.deep.equal(client);
      done();
    });

    it("should return time entries with a GET to /time_entries",function() {
      var req = client.timeEntries.all();
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('data').that.is.an('array');
        expect(res.body).to.have.property('paging').that.is.an('object');
      });
    });

    it("should return a time entry by id with GET to /time_entries/<id>",function() {
      var req = client.timeEntries.show({timeEntryId:4});
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('data').that.is.an('array');
        expect(res.body).to.have.property('paging').that.is.an('object');
      });
    });
  });

  describe("#timeEntryCategories", function() {

    nock(API_BASE, { reqheaders:{ 'auth':'test-token'} })
      .get('/time_entry_categories')
      .reply(200,{data:[],paging:{}});

    it("should be initialised on the client",function(done) {
      expect(client.timeEntryCategories).to.be.an.instanceof(TimeEntryCategories);
      expect(client.timeEntryCategories.client).to.deep.equal(client);
      done();
    });

    it("should return time entries with a GET to /time_entry_categories",function() {
      var req = client.timeEntryCategories.all();
      return req.then(function(res) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('data').that.is.an('array');
        expect(res.body).to.have.property('paging').that.is.an('object');
      });
    });
  });
});
