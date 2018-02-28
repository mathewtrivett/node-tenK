var expect = require('chai').expect;
var TenK = require('../index.js');
var nock = require('nock');
var _ = require('underscore');

const API_BASE = 'https://vnext-api.10000ft.com/api/v1';
const client = new TenK('test-token');
const HEADERS = { reqheaders:{ 'auth':'test-token'} };

describe('Projects', function() {

    nock(API_BASE, HEADERS)
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
        var req = client.projects.show({ projectId:202 });
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });
    });

    describe('#update',function() {
      it('should update the project with the given id with a PUT to /projects/<id>',function() {
        var req = client.projects.update({ projectId: 202, options: {} });
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
        var req = client.projects.remove({ projectId:202 });
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });
    });

  });

  describe('Project resources', function() {

    describe("#assignments",function() {
      nock(API_BASE, HEADERS)
        .get(/projects\/\d+\/assignments/)
        .reply(200)
        .get(/projects\/\d+\/assignments\/\d+$/)
        .reply(200)

      it('should list all the assignments for a given project with GET to /projects/<id>/assignments',function() {
        var req = client.projects.assignments.all({ projectId: 101 });
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });

      it('should get a specific assignment for a given project with GET to /projects/<id>/assignments/<id>',function() {
        var req = client.projects.assignments.show({ projectId:101, assignmentId: 1 });
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });
    });

    describe("#billRates", function() {
      nock(API_BASE, HEADERS)
        .get(/projects\/\d+\/bill_rates$/)
        .reply(200)
        .get(/projects\/\d+\/bill_rates\/\d+$/)
        .reply(200)
        .put(/projects\/\d+\/bill_rates\/\d+$/)
        .reply(200)
        .post(/projects\/\d+\/bill_rates$/)
        .reply(201)
        .delete(/projects\/\d+\/bill_rates\/\d+$/)
        .reply(200)

      it('should list all the bill rates for a given project with GET to /projects/<id>/bill_rates',function() {
        // object_literal { projectId:4 }
        var req = client.projects.billRates.all(4);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });

      it('should show a specific bill rate for a given project with GET to /projects/<id>/bill_rates/<id>',function() {
        // object_literal { projectId:4, billRatesId: 201 }
        var req = client.projects.billRates.show(4,201);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });

      it('should update a bill rate with a PUT and valid data to /projects/<id>/bill_rates/<id>',function() {
        // object_literal { projectId:4, billRatesId: 201, options: {} }
        var req = client.projects.billRates.update(4,201,{});
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });

      it('should create a bill rate with a POST and valid data to /projects/<id>/bill_rates',function() {
        // object_literal { projectId:4, options: {} }
        var req = client.projects.billRates.create(4,{});
        return req.then(function(res) {
          expect(res.statusCode).to.equal(201);
        });
      });

      it('should remove a bill rate with a DELETE to /projects/<id>/bill_rates/<id>',function() {
        // object_literal { projectId:4, billRateId: 201 }
        var req = client.projects.billRates.remove(4,201);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });
    });

    describe('#budgetItems', function() {
      nock(API_BASE, HEADERS)
        .get(/projects\/\d+\/budget_items$/)
        .query(function(query) {
          var validItemTypes = ['TimeFees','TimeFeesDays','Expenses'];
          return query.hasOwnProperty('item_type') && validItemTypes.includes(query.item_type);
        })
        .reply(200)
        .get(/projects\/\d+\/budget_items\/\d+$/)
        .reply(200)
        .post(/projects\/\d+\/budget_items$/,function(body) {
          var validItemTypes = ['TimeFees','TimeFeesDays','Expenses'];
          return body.hasOwnProperty('item_type') && body.hasOwnProperty('amount') && validItemTypes.includes(body.item_type);
        })
        .reply(201)
        .put(/projects\/\d+\/budget_items\/\d+$/,function(body) {
          return body.hasOwnProperty('amount');
        })
        .reply(200)

      it('it should get all the budget items of a certain type with a GET to /projects/<id>/budget_items',function() {
        // object_literal { projectId:4, options: { item_type: 'TimeFees' } }
        var req = client.projects.budgetItems.all(4,{item_type:'TimeFees'});
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        })
      });

      it('should return a specific budget item for a given project with GET to /projects/<id>/budget_items/<id>',function() {
        // object_literal { projectId:4, budgetItemId:201 }
        var req = client.projects.budgetItems.show(4,201);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });

      it('should create a budget item with a POST and valid data to /projects/<id>/budget_items',function() {
        // object_literal { projectId:4, options:{ item_type: 'Expenses', amount:300} }
        var req = client.projects.budgetItems.create(4,{item_type: 'Expenses', amount: 400.00});
        return req.then(function(res) {
          expect(res.statusCode).to.equal(201);
        });
      });

      it('should update a budget item with a PUT and valid data to /projects/<id>/budget_items',function() {
        // object_literal { projectId:4, budgetItemId:2002, options:{amount:300} }
        var req = client.projects.budgetItems.update(4,2002,{amount:300});
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });
    });

    describe('#expenseItems',function() {
      nock(API_BASE,HEADERS)
      .get(/projects\/\d+\/expense_items$/)
      .reply(200)
      .get(/projects\/\d+\/expense_items\/\d+$/)
      .reply(200)
      .put(/projects\/\d+\/users\/\d+\/expense_items\/\d+$/)
      .reply(200);

      it('should return all the expense items for a given project with GET to /projects/<id>/expense_items',function() {
        var req = client.projects.expenseItems.all(4);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });

      it('should return a specific expense item with a GET to /projects/<id>/expense_items/<id>',function(){
        var req = client.projects.expenseItems.show(4,10000001);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });

      it('should update a expense item with a valid PUT to /projects/<id>/users/<id>/expense_items/<id>');
    });

    describe('#expenseItemCategories',function(){
      nock(API_BASE,HEADERS)
        .get(/projects\/\d+\/expense_item_categories$/)
        .reply(200)

      it('should return the expense item categories for a given project with GET to /projects/<id>/expense_item_categories',function() {
        var req = client.projects.expenseItemCategories.all(4);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        })
      });
    });

    describe("#phases",function() {
      nock(API_BASE,HEADERS)
        .get(/projects\/\d+\/phases$/)
        .reply(200)
        .post(/projects\/\d+\/phases$/,function(body) {
          var requiredProps = ['phase_name','starts_at','ends_at'];
          return _.isEqual(Object.getOwnPropertyNames(body).sort(),requiredProps.sort());
        })
        .reply(201)
        .put(/projects\/\d+\/phases\/\d+$/,function(body) {
          var requiredProps = ['phase_name','starts_at','ends_at'];
          return _.intersection(requiredProps,Object.getOwnPropertyNames(body)).length > 0;
        })
        .reply(200)

      it('should get all phases for a given project with GET to /projects/<id>/phases',function() {
        var req = client.projects.phases.all(4);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });

      it('should create a phase with a valid POST to /projects/<id>/phases',function() {
        var req = client.projects.phases.create(4,{phase_name:'New phase',starts_at: '2018-02-28', ends_at: '2018-03-02'});
        return req.then(function(res) {
          expect(res.statusCode).to.equal(201);
        });
      });

      it('should update a phase with a valid PUT to /projects/<id>/phases/<id>',function() {
        var req = client.projects.phases.update(4,5,{ends_at:'2018-03-05'});
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });
    });

    describe('#tags', function() {
      nock(API_BASE,HEADERS)
        .get(/projects\/\d+\/tags$/)
        .reply(200)
        .post(/projects\/\d+\/tags/,function(body) {
          return body.hasOwnProperty('value');
        })
        .reply(201)
        .delete(/projects\/\d+\/tags\/\d+$/)
        .reply(200)

      it('should return all the project tags with a GET to /projects/<id>/tags',function() {
        var req = client.projects.tags.all(4);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });

      it('should create a new project tag with a valid POST to /projects/<id>/tags',function() {
        var req = client.projects.tags.create(4,{value:'TDD'});
        return req.then(function(res) {
          expect(res.statusCode).to.equal(201);
        });
      });

      it('should delete a project tag with a DELETE to /projects/<id>/tags/<id>',function() {
        var req = client.projects.tags.remove(4,1001);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });
    });

    describe("#timeEntries",function() {
      nock(API_BASE,HEADERS)
      .get(/projects\/\d+\/time_entries$/)
      .reply(200)
      .get(/projects\/\d+\/time_entries\/\d+$/)
      .reply(200)
      .post(/projects\/\d+\/time_entries$/,function(body) {
        var requiredProps = ['user_id','assignable_id','date','hours'];
        return _.isEqual(requiredProps.sort(),Object.getOwnPropertyNames(body).sort());
      })
      .reply(201)

      it('should get all the time entries for a given project with GET to /projects/<id>/time_entries',function() {
        var req = client.projects.timeEntries.all(4);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });

      it('should get a specific time entry for a given project with GET to /projects/<id>/time_entries/<id>',function() {
        var req = client.projects.timeEntries.show(4,101);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });

      it('should create a new time entry with a valid POST to /projects/<id>/time_entries',function() {
        var req = client.projects.timeEntries.create(4, {user_id:200, assignable_id:4, date: '2018-02-28',hours: 0.5});
        return req.then(function(res) {
          expect(res.statusCode).to.equal(201);
        });
      });
    });

    describe("#timeEntryCategories",function() {
      nock(API_BASE,HEADERS)
      .get(/projects\/\d+\/time_entry_categories$/)
      .reply(200)

      it('should return all the time entry categories for a given project',function() {
        var req = client.projects.timeEntryCategories.all(4);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        });
      });
    });

    describe('#users', function() {
      nock(API_BASE,HEADERS)
      .get(/projects\/\d+\/users$/)
      .reply(200)

      it('should fetch all the users for a project with a GET to /projects/<id>/users',function() {
        var req = client.projects.users.all(4);
        return req.then(function(res) {
          expect(res.statusCode).to.equal(200);
        })
      });
    });
});
