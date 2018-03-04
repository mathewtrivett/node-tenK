Node-Tenk is a simple wrapper around the [10000ft API](https://github.com/10Kft/10kft-api).

It is designed around this common pattern of methods:

*all()* - Fetch a collection of resources
*show()* - Fetch an individual resource
*create()* - Create a resource.
*update()* - Update a resource.
*remove()* - Deletes a resource.

All methods accept an object literal providing the parameters for the request. This typically comprises id values for the resources being requested and an options object. This options object's purpose varies depending on the request type.

*all()* - { options:{} } - The input to a query string.
*show()* - { options: {} } - The input to a query string.
*create()* - { options: {} } - The POST request body.
*update()* - { options: {} } - The PUT request body.
*remove()* - { options: {} } - N/A

All API calls are asynchronous and return promises.


# Install

```
npm install node-tenK
```

# Usage

## Create a client

The client defaults to the staging server to prevent accidental manipulation of important data.

```
const TenK = new TenK({token: 'YOUR_STAGING_API_TOKEN'});
```

To initialise a production client simply pass in the production apiBase as well as your production token.
```
const TenK = new TenK({token: 'YOUR_PRODUCTION_API_TOKEN', apiBase: 'https://app.10000ft.com/api/v1/'});
```

## Projects

For available options for Projects read the [official 10000ft API docs](https://github.com/10Kft/10kft-api).

```
# Get all projects for this account
TenK.projects.all({ options:{} });

# Show a specific project
TenK.projects.show({ projectId:##, options: {}});

# Create a new projects
TenK.projects.create({ options: {} });

# Update a project
TenK.projects.update({ projectId:##, options:{} });

# Delete a project
TenK.projects.remove({ projectId:## });
```

## Project Assignments

```
TenK.projects.assignments.all({ projectId:## });
TenK.projects.assignments.show({ projectId:##, assignmentId:## });
```

## Bill Rates

### By Project
```
TenK.projects.billRates.all({ projectId:##, options:{} });
TenK.projects.billRates.show({ projectId:##, billRateId:## });
TenK.projects.billRates.create({ projectId:##, options:{} });
TenK.projects.billRates.update({ projectId:##, billRateId:##, options:{} });
TenK.projects.billRates.remove({ projectId:##, billRateId:## });
```

## By User
```
TenK.users.billRates.all({ userId:## });
TenK.users.billRates.show({ userId:##, billRateId:## });
TenK.users.billRates.update({ userId:##, billRateId:##, options: {} });
TenK.users.billRates.remove({ userId: ##, billRateId:## });
```

# Expense entries

## By Project
```
TenK.projects.expenseEntries.all({ projectId:## });
TenK.projects.expenseEntries.show({ projectId:##, expenseEntryId:## });
TenK.projects.expenseEntries.create({ projectId:##, options: {} });
```

## By User
```
TenK.users.expenseEntries.all({ userId:## });
TenK.users.expenseEntries.show({ userId:##, expenseEntryId:## });
TenK.users.expenseEntries.remove({ userId: ##, expenseEntryId: ## });
```

# Tags

## By Project
```
TenK.projects.tags.all({ projectId: ## });
TenK.projects.tags.show({ projectId: ##, tagId: ## });
```

## By User

```
TenK.users.tags.all({ userId: ## });
TenK.users.tags.all({ userId: ##, tagId: ## });
```

# Time entries
```
TenK.projects.timeEntries.all({ projectId:## });

# Show a specific time entry
TenK.projects.timeEntries.show({ projectId:##, timeEntryId:## });
TenK.projects.timeEntryCategories.all({ projectId:## }); //
```

# Project phases
```
# Show all phases for `projectId`
TenK.projects.phases.all({ projectId:## });
```

# Show all placeholders for `projectId`
```
TenK.projects.placeholders.all({ projectId:## });
```

# Show all the users on `projectId`
```
TenK.projects.users.all({ projectId:## });
```

# Users
```
TenK.users.all({ options:{} });
TenK.users.show({ userId:## });
TenK.users.create({ options:{} });
```

# User Assignments

```
TenK.users.assignments.all({ userId:## });
TenK.users.assignments.create({ userId:## });
TenK.users.assignments.remove({ userId:##, assignmentId:## });
```

# User availability
```
TenK.users.availability.all({ userId:## });
TenK.users.availability.show(userId, availabilityId);
TenK.users.availability.create(userId, options);
TenK.users.availability.update(userId, availabilityId, options);
TenK.users.availability.remove(userId, availabilityId);
```


# Placeholders
```
TenK.placeholders.all(options);
TenK.placeholders.show(placeholderId);
TenK.placeholders.create(options);
TenK.placeholders.update(placeholderId, options);
TenK.placeholders.remove(placeholderId);
```

# Disciplines
```
TenK.disciplines.all();
TenK.disciplines.show(disciplineId);
```

# Approvals signature
```
TenK.approvals.all();
TenK.approvals.create(options);
TenK.approvals.remove(approvalId);
```

# Lists all holidays
```
TenK.holidays.all();
```
