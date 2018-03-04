Node-Tenk is a simple wrapper around the [10000ft API](https://github.com/10Kft/10kft-api). All API are asynchronous and return promises. All functions destructure arguments from an object literal.

# Install

```
# Install
npm install node-tenK
```

# Usage

## Create a client

The client defaults to using the staging server apiBase to avoid you manipulating important data accidentally.

```
const TenK = new TenK({token: 'YOUR_STAGING_API_TOKEN'});
```

To initialise a production client simply pass in the production apiBase as well as your production token.
```
const TenK = new TenK({token: 'YOUR_PRODUCTION_API_TOKEN', apiBase: 'https://app.10000ft.com/api/v1/'});
```

## Projects


```
# Get all projects for this account
TenK.projects.all({options:{}})

# Show a specific project
TenK.projects.show({projectId:## })

# Create a new projects
TenK.projects.create(options)

# Update a project
TenK.projects.update(projectId, options)

# Delete a project
TenK.projects.remove(projectId)
```

## Project Assignments

```
TenK.projects.assignments.all(projectId)
TenK.projects.assignments.show(projectId, assignmentId)
```

## Bill Rates

### By Project
```
TenK.projects.billRates.all(projectId, options)
TenK.projects.billRates.show(projectId, billRateId)
TenK.projects.billRates.create(projectId, options)
TenK.projects.billRates.update(projectId, billRateId, options)
TenK.projects.billRates.remove(projectId, billRateId)
```

## By User
```
TenK.users.billRates.all(userId)
TenK.users.billRates.show(userId, billRateId)
TenK.users.billRates.update(userId, billRateId, options)
TenK.users.billRates.remove(userId, billRateId)
```

# Expense entries

## By Project
```
TenK.projects.expenseEntries.all(projectId)
TenK.projects.expenseEntries.show(projectId, expenseEntryId)
TenK.projects.expenseEntries.create(projectId, options)
```

## By User
```
TenK.users.expenseEntries.all(userId)
TenK.users.expenseEntries.show(userId, expenseEntryId)
TenK.users.expenseEntries.remove(userId, expenseEntryId)
```

# Project tags
```
TenK.projects.tags.all(projectId) // Project tags
TenK.projects.tags.show(projectId, tagId) // Project tag
```


# Time entries
```
TenK.projects.timeEntries.all(projectId)

# Show a specific time entry
TenK.projects.timeEntries.show(projectId, timeEntryId)
TenK.projects.timeEntryCategories.all(projectId) //
```

```
# Show all phases for `projectId`
TenK.projects.phases.all(projectId) // Project phases

# Show all placeholders for `projectId`
TenK.projects.placeholders.all(projectId) // Project phases

# Show all the users on `projectId`
TenK.projects.users.all(projectId)
```

# Users
```
TenK.users.all(options) // Would return a JSON for all users.
TenK.users.show(userId) // Would return an individual user.
TenK.users.create(options)
TenK.users.tags.all(userId)
```

# User Assignments

```
TenK.users.assignments.all(userId)
TenK.users.assignments.create(userId)
TenK.users.assignments.remove(userId, assignmentId)
TenK.users.availability.all(userId)
TenK.users.availability.show(userId, availabilityId)
TenK.users.availability.create(userId, options)
TenK.users.availability.update(userId, availabilityId, options)
TenK.users.availability.remove(userId, availabilityId)
```


# Placeholders

```
TenK.placeholders.all(options)
TenK.placeholders.show(placeholderId)
TenK.placeholders.create(options)
TenK.placeholders.update(placeholderId, options)
TenK.placeholders.remove(placeholderId)
```

# Disciplines

```
TenK.disciplines.all()
TenK.disciplines.show(disciplineId)
```

# Approvals signature
```
TenK.approvals.all()
TenK.approvals.create(options)
TenK.approvals.remove(approvalId)
```

# Lists all holidays
```
TenK.holidays.all()
```
