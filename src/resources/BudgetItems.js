var { Base } = require('./Base.js');

class BudgetItems extends Base {
  constructor(resourceType,client) {
    super(client);
    this.resourceType = resourceType;
  }

  all(resourceId, options={}) {
    if(arguments.length <= 1) {
      options = resourceId;
      return this.get(`${this.resourceType}budget_items`, options);
    } else {
      return this.get(`${this.resourceType}${resourceId}/budget_items`, options);
    }
  }

  show(resourceId, budgetItemId,options) {
    return this.get(`${this.resourceType}${resourceId}/budget_items/${budgetItemId}`, options);
  }

  create(resourceId, options={}) {
    return this.post(`${this.resourceType}${resourceId}/budget_items`,options);
  }

  update(resourceId, budgetItemId, options) {
    if (arguments.length === 2) {
      return this.put(`${this.resourceType}/budget_items/${budgetItemId}`,options);
    } else {
      return this.put(`${this.resourceType}${resourceId}/budget_items/${budgetItemId}`,options);
    }
  }

  delete(budgetItemId) {
    return this.delete(`${this.resourceType}/budgetItems/${budgetItemId}`);
  }
}

module.exports = { BudgetItems }
