import { editTask } from "./edit.js";
import { deleteTask } from "./delete.js";

export function updateTasks(data) {
    console.log(data);
    const fragment = new DocumentFragment();

    for (const task of data) {
        const container = document.createElement("section");
        const date = document.createElement("div");
        const taskF = document.createElement("article");
        const icon = document.createElement("div");
        const data = document.createElement("div");
        const title = document.createElement("h3");
        const description = document.createElement("p");
        const project = document.createElement("p");
        const deleteButton = document.createElement("button");

        container.classList.add("container");
        container.setAttribute('id', `taskContainer${task.id}`);
        date.classList.add("date")
        taskF.classList.add("task")
        icon.classList.add("icon")
        data.classList.add("data")
        title.classList.add("title")
        description.classList.add("description")
        project.classList.add("project")
        deleteButton.classList.add("delete")
        deleteButton.setAttribute('id', `deleteTask${task.id}`);


        date.textContent = new Date(task.date).toLocaleString('es-co', { weekday: 'short', month: 'short', day: '2-digit' });
        title.textContent = task.name;
        description.textContent = task.description
        project.textContent = task.project;
        deleteButton.textContent = "Delete";


        fragment.append(container);
        container.appendChild(date);
        container.appendChild(taskF);
        taskF.appendChild(icon);
        taskF.appendChild(data);
        data.appendChild(title);
        data.appendChild(description);
        taskF.appendChild(project);
        taskF.appendChild(deleteButton);
        document.getElementById('addTask').appendChild(fragment)

        const taskContainer = document.getElementById(`taskContainer${task.id}`)
        taskContainer.addEventListener('click', () => {
            editTask(task.id);
            const addNewTaskButton = document.getElementById("addNewTaskButton")
            addNewTaskButton.style.display = "none";
            // const editTaskButton = document.getElementById("editTaskButton")
            // editTaskButton.style.display = "block"
        })
        deleteButton.addEventListener('click', () => { deleteTask(task.id) })
    }
}