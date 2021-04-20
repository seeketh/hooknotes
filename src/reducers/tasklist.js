// Task list reducer for managing tasks

// Constants
import {TASK_ADD, TASK_MARK, TASK_REMOVE, TASK_REPLACE} from '../actions';
// Uitlities for implmenting tasks management
import {addTask, markTask, removeTask, replaceTask} from '../lib';

const taskListReducer = (tasks = [], action) => {
    switch(action.type) {
        case TASK_ADD:
            //console.log("RED", tasks);
            return addTask(tasks, action.text, action.status);
        case TASK_REMOVE:
            return removeTask(tasks, action.location);
        case TASK_REPLACE:
            return replaceTask(tasks, action.location, action.text);
        case TASK_MARK:
            return markTask(tasks, action.location, action.status);
        default:
            return tasks;
    }
}

export {taskListReducer};