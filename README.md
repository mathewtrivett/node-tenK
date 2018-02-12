
# Install

```
# Install
npm install node-tenK
```

# Usage

## Create a client

```
# Staging client
const TenK = new TenK({token: 'YOUR_STAGING_API_TOKEN'});

# Production client
const TenK = new TenK({token: 'YOUR_PRODUCTION_API_TOKEN', api_base: 'https://app.10000ft.com/api/v1/'});
```

## Projects
```
# Get all projects for this account
TenK.projects.all(options)

# Show a specific project
TenK.projects.show(projectId)

# Create a new projects
TenK.projects.create(options)

# Update a project
TenK.projects.update(projectId,options)

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
TenK.projects.billRates.create(projectId,data)
TenK.projects.billRates.update(projectId, billRateId, options)
TenK.projects.billRates.remove(projectId, billRateId)
```

## By User
```
TenK.users.billRates.all(userId)
TenK.users.billRates.show(userId,billRateId)
TenK.users.billRates.update(userId,billRateId,data)
TenK.users.billRates.remove(userId,billRateId)
```

# Expense entries

## By Project
```
TenK.projects.expenseEntries.all(projectId)
TenK.projects.expenseEntries.show(projectId,expenseEntryId)
TenK.projects.expenseEntries.create(projectId,data)
```

## By User
```
TenK.users.expenseEntries.all(userId)
TenK.users.expenseEntries.show(userId,expenseEntryId)
TenK.users.expenseEntries.remove(userId,expenseEntryId)
```

# Project tags
```
TenK.projects.tags.all(projectId) // Project tags
TenK.projects.tags.show(projectId,tagId) // Project tag
```


# Time entries
```
TenK.projects.timeEntries.all(projectId)

# Show a specific time entry
TenK.projects.timeEntries.show(projectId, time_entry_id)
TenK.projects.time_entry_categories.all(projectId) //
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
TenK.users.create(data)
TenK.users.tags.all(userId)
```

# User Assignments

```
TenK.users.assignments.all(userId)
TenK.users.assignments.create(userId)
TenK.users.assignments.remove(userId, assignment_id)
TenK.users.availability.all(userId)
TenK.users.availability.show(userId, availabilityId)
TenK.users.availability.create(userId,data)
TenK.users.availability.update(userId,availabilityId, data)
TenK.users.availability.remove(userId,availabilityId)
```


# Placeholders

```
TenK.placeholders.all(fields)
TenK.placeholders.show(id)
TenK.placeholders.create()
TenK.placeholders.update()
TenK.placeholders.remove()
```

# Disciplines

```
TenK.disciplines.all()
TenK.disciplines.show(disciplineId)
```

# Approvals signature
```
TenK.approvals.all()
TenK.approvals.create(data)
TenK.approvals.remove(approvalId)
```

# Lists all holidays
```
TenK.holidays.all()
```
