
# Install

```
# Install
npm install node-tenK
```

# Usage

## Projects
```
Client.projects.list(fields).end() // Would return a JSON for all projects.
Client.projects.get(project_id).end() // Would return an individual project.
Client.projects.post(data).end() // Would post a new project.
Client.projects.put(project_id,data).end()
```

## Project Assignments

```
Client.projects.assignments.list(project_id).end()//
Client.projects.assignments.get(project_id, assignment_id).end()
```

## Bill Rates

### By Project
```
Client.projects.bill_rates.list(project_id).end()
Client.projects.bill_rates.get(project_id,bill_rates_id).end()
Client.projects.bill_rates.post(project_id,data).end()
Client.projects.bill_rates.put(project_id,bill_rate_id,data).end()
Client.projects.bill_rates.delete(project_id,bill_rate_id).end()
```

## By User
```
Client.users.bill_rates.list(user_id).end()
Client.users.bill_rates.get(user_id,bill_rate_id).end()
Client.users.bill_rates.put(user_id,bill_rate_id,data).end()
Client.users.bill_rates.delete(user_id,bill_rate_id).end()
```

# Expense entries

## By Project
```
Client.projects.expense_entries.list(project_id).end()
Client.projects.expense_entries.get(project_id,expense_entry_id).end()
Client.projects.expense_entries.post(project_id,data).end()
```

## By User
```
Client.users.expense_entries.list(user_id).end()
Client.users.expense_entries.get(user_id,expense_entry_id).end()
Client.users.expense_entries.delete(user_id,expense_entry_id).end()
```

# Project tags
```
Client.projects.tags.list(project_id).end() // Project tags
Client.projects.tags.get(project_id,tag_id).end() // Project tag
```


# Time entries
```
Client.projects.time_entries.list(project_id).end()
Client.projects.time_entries.get(project_id, time_entry_id).end()
Client.projects.time_entry_categories.list(project_id).end() //
```

```
Client.projects.phases.list(project_id).end() // Project phases
Client.projects.placeholders.list(project_id).end() // Project phases
Client.projects.users.list(project_id).end()
```

# Users
```
Client.users.list(fields).end() // Would return a JSON for all users.
Client.users.get(user_id).end() // Would return an individual user.
Client.users.post(data).end()
Client.users.tags.list(user_id).end()
```

# User Assignments

Client.users.assignments.list(user_id).end()
Client.users.assignments.post(user_id).end()
Client.users.assignments.delete(user_id, assignment_id).end()
Client.users.availability.list(user_id).end()
Client.users.availability.get(user_id, availability_id).end()
Client.users.availability.post(user_id,data).end()
Client.users.availability.put(user_id,availability_id, data).end()
Client.users.get(id).availability().delete(id).end()



// Placeholders

Client.placeholders.list(fields).end()
Client.placeholders.get(id).end()
Client.placeholders.post().end()
Client.placeholders.put().end()
Client.placeholders.delete().end()


// Disciplines

Client.disciplines.list()
Client.disciplines.get(id)


//

// Approvals signature

Client.approvals.list().get().end()
Client.approvals.post(data).end()
Client.approvals.delete(id).end()

// Lists all holidays
Client.holidays.list().end()
