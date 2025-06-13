// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Add click event to remove the task
        removeButton.onclick = () => {
            taskList.removeChild(listItem);
        };

        // Append button and list item
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Event listener for "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for "Enter" key in input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
