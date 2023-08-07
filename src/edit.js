import { showNewTask } from "./main.js";

const editTaskButton = document.getElementById('editTaskButton')
let tasks = JSON.parse(window.localStorage.getItem("task"))
const form = document.getElementById('newTaskData')


export function editTask(taskId) {
    const editTask = JSON.parse(window.localStorage.getItem("task")).filter((task) => (task.id == taskId))
    tasks = tasks.filter((task) => (task.id != taskId))

    showNewTask();
    // const addNewTaskButton = document.getElementById("addNewTaskButton")
    // addNewTaskButton.style.display = "none";
    // const editTaskButton = document.getElementById("editTaskButton")
    // editTaskButton.style.display = "block"

    document.getElementById('name').value = editTask[0].name;
    document.getElementById('description').value = editTask[0].description;
    document.getElementById('date').value = editTask[0].date;
    document.getElementById('priority').value = editTask[0].priority;
    document.getElementById('project').value = editTask[0].project;
}

export function updateInfoTask() {
    const name = document.getElementById('name').value
    const description = document.getElementById('description').value
    const date = document.getElementById('date').value ?? new Date()
    const priority = document.getElementById('priority').value
    const project = document.getElementById('project').value

    const task = {
        id: tasks.length + 1,
        name,
        description,
        date,
        priority,
        project
    }
    tasks.push(task)

    window.localStorage.clear()
    window.localStorage.setItem("task", JSON.stringify(tasks))
    form.reset();
    window.location.reload()
    const sideBar = document.getElementById('newTask')
    sideBar.style.display = 'none';
}
editTaskButton.addEventListener('click', updateInfoTask);
