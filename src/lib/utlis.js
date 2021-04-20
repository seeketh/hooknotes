/* Task creation.
** input: Task list (array of objects), task description and task status
** output: Task list reflecting the modification
** Note: Task list stays intact.
** Task is an object {text: "description", status: "done or not"}
*/

const addTask = (tasks, text, status) => {
    if ((text === '') | (status === '')) {
        // Work on handling this error.
        return;
    } else {
        //console.log("UT", tasks);
        return [...tasks, {text, status}];
    }
}

/* Task modification.
** input: Task list (array of objects), index of tast to replace, raplacing task
** output: Task list reflecting the modification
** Note: Task list stays intact.
** Task is an object {text: "description", status: "done or not"}
*/

const replaceTask = (tasks, location, newText) => {
    if ((tasks.length === 0) | (parseInt(location) >= tasks.length) | (newText === '')) {
        // Work on handling this error.
        return;
    } else {
        const newTasks = [...tasks];
        newTasks[parseInt(location)].text = newText;
        return newTasks;
    }
}

/* Task removal.
** input: Task list (array of objects), index of tast to remove
** output: Task list reflecting the removal
** Note: Task list stays intact.
** Task is an object {text: "description", status: "done or not"}
*/

const removeTask = (tasks, location) => {
    if ((tasks.length === 0) | (parseInt(location) >= tasks.length)) {
        // Work on handling this error.
        return;
    } else {
        return tasks.filter((task, taskLocation) => taskLocation !== parseInt(location));
    }
}

/* Task status modification.
** input: Task list (array of objects), index of tast status to replace, raplacing task status
** output: Task list reflecting the modification
** Note: Task list stays intact.
** Task is an object {text: "description", status: "done or not"}
*/

const markTask = (tasks, location, newStatus) => {
    if ((tasks.length === 0) | (parseInt(location) >= tasks.length) | (newStatus === '')) {
        // Work on handling this error.
        return;
    } else {
        location = parseInt(location);
        const newTasks = [...tasks];
        newTasks[location].status = newStatus;
        return newTasks;
    }
}

export {addTask, replaceTask, removeTask, markTask};