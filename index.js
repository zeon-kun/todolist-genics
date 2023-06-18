// Function to create a new task item
function createTaskElement(task) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const deleteButton = document.createElement('button');

    checkbox.type = 'checkbox';
    label.innerText = task;
    deleteButton.innerText = 'Delete';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    return listItem;
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const task = taskInput.value.trim();

    if (task !== '') {
    const listItem = createTaskElement(task);

    // Add event listener to delete button
    const deleteButton = listItem.querySelector('button');
    deleteButton.addEventListener('click', deleteTask);

    // Add event listener to checkbox
    const checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', toggleTask);

    taskList.appendChild(listItem);
    taskInput.value = '';
    }
}

// Function to delete a task
function deleteTask(event) {
    const listItem = event.target.parentNode;
    const taskList = document.getElementById('taskList');

    taskList.removeChild(listItem);
}

// Function to toggle a task's done status
function toggleTask(event) {
    const listItem = event.target.parentNode;

    if (event.target.checked) {
    listItem.classList.add('done');
    } else {
    listItem.classList.remove('done');
    }
}

// Add event listener to add task button
const addTaskBtn = document.getElementById('addTaskBtn');
addTaskBtn.addEventListener('click', addTask);

// Add event listener to Enter key press
const taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
    addTask();
    }
});