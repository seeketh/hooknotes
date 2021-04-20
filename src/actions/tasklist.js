// Task List action creators
// NOTE: task is {text: "task text", status: "task status"}

import {TASK_ADD, TASK_REMOVE, TASK_REPLACE, TASK_MARK} from './types';

const add = (text, status) => ({
    type: TASK_ADD,
    text,
    status
});

const remove = (location) => ({
    type: TASK_REMOVE,
    location
});

const replace = (text, location) => ({
    type: TASK_REPLACE,
    text,
    location
})

const mark = (location, status) => ({
    type: TASK_MARK,
    location,
    status
});

export {add, remove, replace, mark};