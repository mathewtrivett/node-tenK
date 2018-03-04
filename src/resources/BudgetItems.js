var { Base } = require('./Base.js');

class BudgetItems extends Base {
  constructor(resourceType,client) {
    super(client);
    this.resourceType = resourceType;
  }

  all({projectId='', options={}}={}) {
    if(this.resourceType !== 'projects/') {
      return this.get(`${this.resourceType}budget_items`, options);
    } else {
      return this.get(`${this.resourceType}${projectId}/budget_items`, options);
    }
  }

  show({projectId='', budgetItemId='', options={}}={}) {
    if(this.resourceType !== 'projects/') {
      return this.get(`${this.resourceType}budget_items/${budgetItemId}`, options);
    } else {
      return this.get(`${this.resourceType}${projectId}/budget_items/${budgetItemId}`, options);
    }
  }

  create({projectId='', options={}}={}) {
    return this.post(`${this.resourceType}${projectId}/budget_items`,options);
  }

  update({projectId='', budgetItemId='', options={}}={}) {
    if(this.resourceType !== 'projects/') {
      return this.put(`${this.resourceType}budget_items/${budgetItemId}`, options);
    } else {
      return this.put(`${this.resourceType}${projectId}/budget_items/${budgetItemId}`,options);
    }
  }
  
  remove({budgetItemId=''} = {}) {
    return this.delete(`${this.resourceType}budget_items/${budgetItemId}`);
  }
}

module.exports = { BudgetItems }
