var { Base } = require('./Base.js');

class BudgetItems extends Base {
  constructor(resourceType,client) {
    super(client);
    this.resourceType = resourceType;
  }

  all(resourceId, options={}) {
    if(['projects/'].includes(this.resourceType)) {
      return this.get(`${this.resourceType}${resourceId}/budget_items`, options);
    } else {
      options = resourceId;
      return this.get(`${this.resourceType}budget_items`, options);
    }
  }

  show(resourceId, budgetItemId, options) {
    if(['projects/'].includes(this.resourceType)) {
      return this.get(`${this.resourceType}${resourceId}/budget_items/${budgetItemId}`, options);
    } else {
      options = budgetItemId
      return this.get(`${this.resourceType}budget_items/${resourceId}`, options);
    }
  }

  create(resourceId, options={}) {
    return this.post(`${this.resourceType}${resourceId}/budget_items`,options);
  }

  update(resourceId, budgetItemId, options) {
    if(['projects/'].includes(this.resourceType)) {
      return this.put(`${this.resourceType}${resourceId}/budget_items/${budgetItemId}`,options);
    } else {
      options = budgetItemId
      return this.put(`${this.resourceType}budget_items/${resourceId}`,options);
    }
  }

  remove(budgetItemId) {
    return this.delete(`${this.resourceType}budget_items/${budgetItemId}`);
  }
}

module.exports = { BudgetItems }
