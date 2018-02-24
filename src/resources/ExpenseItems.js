var { Base } = require('./Base.js');

class ExpenseItems extends Base {
  constructor(resourceType,...args) {
    super(...args);
    this.resourceType = resourceType;
  }

  all(resourceId, options={}) {
    return this.get(`${this.resourceType}${resourceId}/expense_items`, options);
  }

  show(resourceId, options={}) {
    return this.get(`${this.resourceType}${resourceId}/expense_items`, options);
  }

  create(resourceId, options={}) {
    return this.post(`${this.resourceType}${resourceId}/expense_items`,options);
  }

  update(resourceId, budgetItemId, options) {
    if (arguments.length === 2) {
      return this.put(`${this.resourceType}/expense_items/${budgetItemId}`,options);
    } else {
      return this.put(`${this.resourceType}${resourceId}/expense_items/${budgetItemId}`,options);
    }
  }

  delete(budgetItemId) {
    return this.delete(`${this.resourceType}/budgetItems/${budgetItemId}`);
  }

}

class ExpenseItemCategories extends Base {
  constructor(resourceType,client) {
    super(client);
    this.resourceType = resourceType;
  }

  all(options={}) {
    return this.get(`${this.resourceType}expense_item_categories`,options);
  }
}

module.exports = { ExpenseItems, ExpenseItemCategories }
