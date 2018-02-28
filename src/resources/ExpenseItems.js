var { Base } = require('./Base.js');

class ExpenseItems extends Base {
  constructor(resourceType,client) {
    super(client);
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

  update(options) {
    if(!options.expenseEntryId) options.expenseEntryId = '';
    if(!options.resourceId) options.projectId = '';
    if(!options.userId) options.userId = '';
    if(!options.options) options.options = {}

    return this.put(`${this.resourceType}${options.resourceId}/users/${options.userId}/expense_items/${options.expenseEntryId}`, options.options);
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

  all(resourceId, options={}) {
    if(['projects/'].includes(this.resourceType)) {
      return this.get(`${this.resourceType}${resourceId}/expense_item_categories`,options);
    } else {
      return this.get(`${this.resourceType}expense_item_categories`,options);
    }
  }
}

module.exports = { ExpenseItems, ExpenseItemCategories }
