// Export action types and creators

export {
    TASK_ADD,
    TASK_MARK,
    TASK_REMOVE,
    TASK_REPLACE,
    TASK_INPUT_CHANGE,
    TASK_INPUT_ERROR
} from './types';

// Task list and task status
export {add, remove, replace, mark} from './tasklist';

// Task input
export {inputChange, inputError} from './taskinput';

// App mode
export {switchMode} from './appmode';