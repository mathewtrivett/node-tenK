const morgan = require('morgan');
const { Request } = require('request-promise');

/**
Builds an object to create a request.
@param {string} url - The Base URL to call the API with
@param {string} endpoint - The resource URI endpoint.
@param {Object} - An object containing key values for headers, body and qs expected by Request.
*/
function defaultRequest(url, endpoint, { headers, body, qs}) {
  var params = {
    uri: `${url}${endpoint}`,
    json: true,
    headers: headers
  }
  if (body) { params.body = body };
  if (qs) {param.qs = qs};
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


    /**
    Builds a get request
    @param {string} endpoint - The URI to be appended to the api_base.
    @param {Object} options - Any query string, body content or additional headers to include.
    @returns {Promise} A Promise representing the state of the request.
    */
    function get(endpoint, options) {
      return Request.get(defaultRequest(this.apiBase, endpoint, {
        headers: this.headers,
        qs: options
      }));
    }

    function post(endpoint,options) {
      return Request.post(defaultRequest(this.apiBase, endpoint, {
        headers: this.headers,
        body: options
      }));
    }

    function put(endpoint, options) {
      return Request.put(defaultRequest(this.apiBase, endpoint, {
        headers: this.headers,
        body: options
      }));
    }

    function delete(endpoint, options) {
      return Request.delete(defaultRequest(this.apiBase, endpoint, {
        headers: this.headers
      }));

    }
}
