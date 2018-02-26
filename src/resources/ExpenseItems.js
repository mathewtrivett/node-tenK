var { Base } = require('./Base.js');

class ExpenseItems extends Base {
  constructor(resourceType,...args) {
    super(...args);
    this.resourceType = resourceType;
  }

  all(resourceId, options={}) {
    return this.get(`${this.resourceType}${resourceId}/expense_items`, options);
  }

  show(resourceId, expenseEntryId, options={}) {
    return this.get(`${this.resourceType}${resourceId}/expense_items/${expenseEntryId}`, options);
  }

  create(resourceId, options={}) {
    return this.post(`${this.resourceType}${resourceId}/expense_items`,options);
  }

  update(resourceId, expenseEntryId, options) {
    if (arguments.length === 2) {
      return this.put(`${this.resourceType}/expense_items/${expenseEntryId}`,options);
    } else {
      return this.put(`${this.resourceType}${resourceId}/expense_items/${expenseEntryId}`,options);
    }
  }

  remove(resourceId,expenseEntryId) {
    return this.delete(`${this.resourceType}${resourceId}/expense_items/${expenseEntryId}`);
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
