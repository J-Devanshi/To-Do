// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    // Get task details
    const taskInput = document.getElementById('taskInput').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    // Validate input
    if (taskInput === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new task object
    const task = {
        task: taskInput,
        dueDate: dueDate,
        priority: priority,
        completed: false
    };

    // Add the new task to the tasks array
    tasks.push(task);

    // Clear input fields
    document.getElementById('taskInput').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('priority').value = 'low';

    // Display the updated tasks
    displayTasks();
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the list before rendering

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('task');
        
        li.innerHTML = `
            <span class="task-name">${task.task}</span>
            <span class="due-date">${task.dueDate}</span>
            <span class="priority">${task.priority}</span>
            <button onclick="toggleCompletion(${index})">Complete</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        
        taskList.appendChild(li);
    });
}

// Function to toggle completion status of a task
function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks(); // Re-render tasks
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1); // Remove task from array
    displayTasks(); // Re-render tasks
}

// Function to filter tasks based on status (completed/pending)
function filterTasks(status) {
    let filteredTasks = [];
    
    if (status === 'all') {
        filteredTasks = tasks;
    } else if (status === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (status === 'pending') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (status === 'high') {
        filteredTasks = tasks.filter(task => task.priority === 'high');
    }

    displayFilteredTasks(filteredTasks);
}

// Function to display filtered tasks
function displayFilteredTasks(filteredTasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the list before rendering filtered tasks

    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('task');
        
        li.innerHTML = `
            <span class="task-name">${task.task}</span>
            <span class="due-date">${task.dueDate}</span>
            <span class="priority">${task.priority}</span>
            <button onclick="toggleCompletion(${index})">Complete</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        
        taskList.appendChild(li);
    });
}
