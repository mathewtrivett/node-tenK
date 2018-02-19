'use strict';

var { Request } = require('request-promise');
var { Projects } = require('./src/resources/Projects.js');
var { Users } = require('./src/resources/Users.js');
var { Placeholders } = require('./src/resources/Placeholders.js');
var { Holidays } = require('./src/resources/Holidays.js');
var { Disciplines } = require('./src/resources/Disciplines.js');
var { Approvals } = require('./src/resources/Approvals.js');
var { Roles } = require('./src/resources/Roles.js');
var { LeaveTypes } = require('./src/resources/LeaveTypes.js');
var { TimeEntries, TimeEntryCategories } = require('./src/resources/TimeEntries.js');
var { BillRates } = require('./src/resources/BillRates.js');
var { BudgetItems } = require('./src/resources/BudgetItems.js');
var { ExpenseItemCategories } = require('./src/resources/ExpenseItems.js');

/**
Builds an object to create a request.
@param {string} url - The Base URL to call the API with
@param {string} endpoint - The resource URI endpoint.
@param {Object} - An object containing key values for headers, body and qs expected by Request.
*/
function defaultRequest(url, endpoint, { headers, body, qs, method}) {
  var params = {
    uri: `${url}${endpoint}`,
    json: true,
    headers: headers
  }
  if (body) { params.body = body };
  if (qs) {params.qs = qs};
  if (method) {params.method = method};
  return params
};

/**
@param {string} auth_token - api token for 10000ft
@param {string} api_base - defaults to the staging server if api_base not given.
*/
class TenK {
    constructor(token, api_base) {
      this.authToken = token;
      this.apiBase = api_base ? api_base : 'https://vnext-api.10000ft.com/api/v1/';
      this.headers = {
        'auth': this.authToken,
        'User-Agent': 'node-tenK',
      }
      this.projects = new Projects(this);
      this.users = new Users('',this);
      this.placeholders = new Placeholders(this);
      this.holidays = new Holidays(this);
      this.disciplines = new Disciplines(this);
      this.approvals = new Approvals(this);
      this.roles = new Roles(this);
      this.leaveTypes = new LeaveTypes(this);
      this.timeEntries = new TimeEntries('',this);
      this.timeEntryCategories = new TimeEntryCategories('',this);
      this.billRates = new BillRates(``,this);
      this.budgetItems = new BudgetItems(``,this);
      this.expenseItemCategories = new ExpenseItemCategories(``,this);
    }

    get(endpoint, options) {
      return Request(defaultRequest(this.apiBase, endpoint, {
        method: 'GET',
        headers: this.headers,
        qs: options
      }));
    }

    post(endpoint,options) {
      return Request(defaultRequest(this.apiBase, endpoint, {
        method: 'POST',
        headers: this.headers,
        body: options
      }));
    }

    put(endpoint, options) {
      return Request(defaultRequest(this.apiBase, endpoint, {
        method: 'PUT',
        headers: this.headers,
        body: options
      }));
    }

    delete(endpoint, options) {
      return Request(defaultRequest(this.apiBase, endpoint, {
        method: 'DELETE',
        headers: this.headers
      }));
    }
}

module.exports = TenK;
