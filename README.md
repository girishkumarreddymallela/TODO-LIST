# TODO List Application

This is a simple TODO list application built with React. It allows you to manage your tasks efficiently, thereby optimizing your work process and time management.

## Features

- Add new tasks with a title and description.
- Mark tasks as completed or incomplete.
- Delete tasks.
- Filter tasks by their completion status (All, Completed, Incomplete).
- Tasks are stored in local storage, so they persist across browser sessions.

## How to Use

1. Enter the title of the task in the 'TITLE' field.
2. Enter the description of the task in the 'TASK' field.
3. Click the 'ADD' button to add the task to the list.
4. Tasks in the list have a checkbox to mark them as completed or incomplete.
5. Each task has a 'Delete' button to remove the task from the list.
6. Use the dropdown menu at the bottom of the list to filter tasks by their completion status.

## Code Overview

The main component of this application is the `TODOLIST` component. It uses React hooks for state management and side effects.

- `useState` is used to manage the state of the tasks (`list`), the input fields (`title` and `task`), the filter (`filter`), and an error message (`enter`).
- `useEffect` is used to store the tasks in local storage whenever the task list changes.
- The `taskHandler` function is used to add new tasks to the list.
- The `taskDeleter` function is used to remove tasks from the list.
- The `handleCheckboxChange` function is used to toggle the completion status of tasks.
- The `handleFilterChange` function is used to set the filter state based on the selected filter.
- The `filteredList` variable is a filtered version of the task list based on the selected filter.

The JSX code renders the input fields, the task list, and the filter dropdown. Each task in the list is rendered with its title, description, completion status, and a delete button.
