// Step 1 
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority");
const taskList = document.querySelector("#task-list");

// Step 2
const tasks = [];

// Step 3 
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskName = taskInput.value.trim();
    const taskPriority = priorityInput.value;

    if (taskName === "") {
        return;
    }

    // Step 4 
    const task = {
        name: taskName,
        priority: taskPriority,
        completed: false
    };

    tasks.push(task);


    taskInput.value = "";

    displayTasks();
});

// Step 5 
function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task-item");
        taskElement.classList.add("priority-" + task.priority);

        if (task.completed) {
            taskElement.classList.add("completed");
        }

        const taskInfo = document.createElement("span");
        taskInfo.classList.add("task-info");
        taskInfo.textContent = task.name + " (" + task.priority + ")";

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("task-buttons");

        const completeBtn = document.createElement("button");
        completeBtn.classList.add("complete-btn");
        completeBtn.textContent = task.completed ? "Undo" : "Complete";
        completeBtn.addEventListener("click", function () {
            task.completed = !task.completed;
            displayTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            tasks.splice(index, 1);
            displayTasks();
        });

        buttonContainer.appendChild(completeBtn);
        buttonContainer.appendChild(deleteBtn);

        taskElement.appendChild(taskInfo);
        taskElement.appendChild(buttonContainer);

        taskList.appendChild(taskElement);
    });
}