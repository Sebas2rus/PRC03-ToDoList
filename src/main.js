import { updateTasks } from './data.js';

const form = document.getElementById('newTaskData')

export function showSideBar() {
    const sideBar = document.getElementById('side-menu')
    sideBar.style.display == 'none' ?
        document.getElementById('side-menu').style.display = 'block' :
        document.getElementById('side-menu').style.display = 'none'
}
const sideBar = document.getElementById("showSideBar")
sideBar.addEventListener('click', showSideBar)
const sideBarWrap = document.getElementById("sideMenuWrap")
sideBarWrap.addEventListener('click', showSideBar)

export function showNewTask() {
    const sideBar = document.getElementById('newTask')
    sideBar.style.display == 'none' ?
        document.getElementById('newTask').style.display = 'block' :
        document.getElementById('newTask').style.display = 'none';
    form.reset();
    // const addNewTaskButton = document.getElementById("addNewTaskButton")
    // addNewTaskButton.style.display = "none";
}

const addNewTask = document.getElementById('addNewTask')
addNewTask.addEventListener('click', () => {
    showNewTask();
    const editTaskButton = document.getElementById("editTaskButton")
    editTaskButton.style.display = "none";
})

const closeAddNewTask = document.getElementById('closeAddNewTask')
closeAddNewTask.addEventListener('click', () => {
    showNewTask();
    const addNewTaskButton = document.getElementById("addNewTaskButton")
    addNewTaskButton.style.display = "block";
    const editTaskButton = document.getElementById("editTaskButton")
    editTaskButton.style.display = "block";
})
const closeAddNewTaskWrap = document.getElementById('closeAddNewTaskWrap')
closeAddNewTaskWrap.addEventListener('click', () => {
    showNewTask();
    const addNewTaskButton = document.getElementById("addNewTaskButton")
    addNewTaskButton.style.display = "block";
    const editTaskButton = document.getElementById("editTaskButton")
    editTaskButton.style.display = "block";
})

const tasks = JSON.parse(window.localStorage.getItem("task")) ?? [];
updateTasks(tasks)

export function eventHandler(e) {
    e.preventDefault();
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
    window.localStorage.setItem("task", JSON.stringify(tasks))
    // const data = JSON.parse(window.localStorage.getItem("task"))
    const temp = [];
    temp.push(task);
    updateTasks(temp)
    form.reset();
    const sideBar = document.getElementById('newTask')
    sideBar.style.display = 'none'
}

form.addEventListener('submit', eventHandler)
