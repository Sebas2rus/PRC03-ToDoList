export function deleteTask(taskId) {
    const undeletedTasks = JSON.parse(window.localStorage.getItem("task")).filter((task) => (task.id != taskId))

    window.localStorage.clear()
    window.localStorage.setItem("task", JSON.stringify(undeletedTasks))
    window.location.reload()


}