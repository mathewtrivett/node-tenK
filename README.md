
# Install

```
# Install
npm install node-tenK
```

# Usage

## Projects
```
TenK.projects.all(options) // Would return a JSON for all projects.
TenK.projects.show(projectId) // Would return an individual project.
TenK.projects.update(projectId,data) // Would create a new project.
TenK.projects.remove(projectId)
```

## Project Assignments

```
TenK.projects.assignments.all(projectId,) //
TenK.projects.assignments.show(projectId, assignmentId)
```

## Bill Rates

### By Project
```
TenK.projects.bill_rates.all(projectId)
TenK.projects.bill_rates.show(projectId, billRateId)
TenK.projects.bill_rates.create(projectId,data)
TenK.projects.bill_rates.update(projectId, billRateId, data)
TenK.projects.bill_rates.remove(projectId, billRateId)
```

## By User
```
TenK.users.bill_rates.all(userId)
TenK.users.bill_rates.show(userId,billRateId)
TenK.users.bill_rates.update(userId,billRateId,data)
TenK.users.bill_rates.remove(userId,billRateId)
```

# Expense entries

## By Project
```
TenK.projects.expense_entries.all(projectId)
TenK.projects.expense_entries.show(projectId,expense_entry_id)
TenK.projects.expense_entries.create(projectId,data)
```

## By User
```
TenK.users.expense_entries.all(userId)
TenK.users.expense_entries.show(userId,expense_entry_id)
TenK.users.expense_entries.remove(userId,expense_entry_id)
```

# Project tags
```
TenK.projects.tags.all(projectId) // Project tags
TenK.projects.tags.show(projectId,tag_id) // Project tag
```


# Time entries
```
TenK.projects.time_entries.all(projectId)
TenK.projects.time_entries.show(projectId, time_entry_id)
TenK.projects.time_entry_categories.all(projectId) //
```

```
TenK.projects.phases.all(projectId) // Project phases
TenK.projects.placeholders.all(projectId) // Project phases
TenK.projects.users.all(projectId)
```

# Users
```
TenK.users.all(fields) // Would return a JSON for all users.
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
TenK.users.availability.show(userId, availability_id)
TenK.users.availability.create(userId,data)
TenK.users.availability.update(userId,availability_id, data)
TenK.users.show(id).availability().remove(id)
```


// Placeholders

```
TenK.placeholders.all(fields)
TenK.placeholders.show(id)
TenK.placeholders.create()
TenK.placeholders.update()
TenK.placeholders.remove()
```

// Disciplines

```
TenK.disciplines.all()
TenK.disciplines.show(id)
```

//

// Approvals signature

TenK.approvals.all()
TenK.approvals.create(data)
TenK.approvals.remove(id)

// Lists all holidays
TenK.holidays.all()
