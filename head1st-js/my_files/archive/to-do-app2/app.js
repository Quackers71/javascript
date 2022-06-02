// Build a Todo List App Tutorial 
// taken from https://youtu.be/MkESyVB4oUw
// https://github.com/TylerPottsDev/yt-js-task-list-2021

// Selectors
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const addButton = document.querySelector("#task-submit-button");
const list_el = document.querySelector("#tasks");

// Event Listeners
addButton.addEventListener('click', addTask);
list_el.addEventListener('click', editTask);

// Functions
function addTask(e) {

    // Prevents the form from submitting
    e.preventDefault();

    const task = input.value;

    // Make sure the task isn't blank on submission
    if (!task) {
        alert("Please fill out the task!");
        return;
    }

    // new task div
    const task_el = document.createElement("div");
    task_el.classList.add("task");

    // new content div
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    task_el.appendChild(task_content_el);

    // new text input
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");
    task_content_el.appendChild(task_input_el);

    // add task to localStorage function call
    saveLocalTasks(input.value);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_complete_el = document.createElement("button");
    task_complete_el.classList.add("complete");
    task_complete_el.innerHTML = "Complete";

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";

    task_actions_el.appendChild(task_complete_el);
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);
    list_el.appendChild(task_el);

    input.value = "";
}

function saveLocalTasks(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editTask(task) {

    if (task_complete_el.innerText.toLowerCase() == "completed") {
        alert("You are unable to amend a task, once it has been marked as completed!");
    } else {
        if (task_edit_el.innerText.toLowerCase() == "edit") {
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText = "Save";
        } else {
            task_input_el.setAttribute("readonly", "readonly");
            task_edit_el.innerText = "Edit";
        }
    }
    list_el.removeChild(task_el);
}

function deleteTask(task) {

    if (task_complete_el.innerText.toLowerCase() == "complete") {
        task_input_el.focus();
        task_complete_el.innerText = "Completed";
        task_input_el.style.setProperty("text-decoration", "line-through");
        task_input_el.style.setProperty("opacity", "0.4");

        task_input_el.setAttribute("type", "completed");
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "Edit";
    } else {
        task_input_el.focus();
        task_complete_el.innerText = "Complete";
        task_input_el.style.setProperty("text-decoration", "none");
        task_input_el.style.setProperty("opacity", "none");

        task_input_el.setAttribute("type", "complete");
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "Edit";
    }
}