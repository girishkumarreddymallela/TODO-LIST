# TODO List Application

This is a simple TODO list application built with React. It allows you to manage your tasks efficiently, thereby optimizing your work process and time management.

# How to run

STEP-1: Navigate to the GitHub repository page and click on the Code button. Select Download ZIP from the dropdown menu. This will download a ZIP file of the entire project to your local machine.

STEP-2: Extract the Files: Locate the downloaded ZIP file on your computer. Right-click on the file and select Extract All... or a similar option. This will extract all the files from the ZIP file into a new folder.

STEP-3: Open the Project in an IDE: Open your preferred Integrated Development Environment (IDE), such as Visual Studio Code. From the File menu, select Open Folder... and navigate to the extracted folder. Select the folder and click Open.

STEP-4: Navigate to the Project Directory: Open the terminal in your IDE (In Visual Studio Code, you can do this by selecting Terminal > New Terminal from the top menu). The terminal should automatically be in the main project directory. If not, use the cd command to navigate into the project directory.

STEP-5: Install the Dependencies: In the terminal, run the command npm install. This will install all the packages that are listed in the package.json file. These are the dependencies that your project needs to run correctly.

STEP-6: Start the Project: Once all the dependencies are installed, you can start the project by running the command npm run start in the terminal. This will start the local development server and you should be able to see your project running by opening a web browser and navigating to http://localhost:3000 (or whatever URL/port your terminal indicates).

Importantly make sure that u have node.js installed in your local machine.

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
