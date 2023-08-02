function showSideBar() {
    const sideBar = document.getElementById('side-menu')
    sideBar.style.display == 'none' ?
        document.getElementById('side-menu').style.display = 'block' :
        document.getElementById('side-menu').style.display = 'none'
}
function showNewTask() {
    const sideBar = document.getElementById('newTask')
    sideBar.style.display == 'none' ?
        document.getElementById('newTask').style.display = 'block' :
        document.getElementById('newTask').style.display = 'none'
}

const form = document.getElementById('newTaskData')

function eventHandler(e) {
    e.preventDefault();
    const name = document.getElementById('name').value
    const description = document.getElementById('description').value
    const task = {
        name,
        description
    }
    window.localStorage.setItem("task", JSON.stringify(task))

    const data = JSON.parse(window.localStorage.getItem("task"))
    console.log(data);
}

form.addEventListener('submit', eventHandler)