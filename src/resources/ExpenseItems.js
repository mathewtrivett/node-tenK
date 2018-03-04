var { Base } = require('./Base.js');

class ExpenseItems extends Base {
  constructor(resourceType,client) {
    super(client);
    this.resourceType = resourceType;
  }

  all({userId = '', projectId = '', options = {}} = {}) {
    return this.get(`${this.resourceType}${userId}${projectId}/expense_items`, options);
  }

  show({userId = '', projectId = '',expenseEntryId = '', options={}} = {}) {
    return this.get(`${this.resourceType}${userId}${projectId}/expense_items/${expenseEntryId}`, options);
  }

  create({userId = '', projectId = '', options = {}} = {}) {
    return this.post(`${this.resourceType}${userId}${projectId}/expense_items`,options);
  }

  update({projectId = '', userId = '', expenseEntryId = '',options = {}} = {}) {
    return this.put(`${this.resourceType}${projectId}/users/${userId}/expense_items/${expenseEntryId}`, options);
  }

  remove({projectId = '', userId = '', expenseEntryId = ''} = {}) {
    return this.delete(`${this.resourceType}${userId}${projectId}/expense_items/${expenseEntryId}`);
  }
}

class ExpenseItemCategories extends Base {
  constructor(resourceType,client) {
    super(client);
    this.resourceType = resourceType;
  }

  all({projectId = '', options = {}} = {}) {
    if(this.resourceType !== 'projects/') {
      return this.get(`${this.resourceType}expense_item_categories`,options);
    }
    return this.get(`${this.resourceType}${projectId}/expense_item_categories`,options);
  }
}

module.exports = { ExpenseItems, ExpenseItemCategories }
