// Task input action creators.

import {TASK_INPUT_CHANGE, TASK_INPUT_ERROR} from './types';

const inputChange = (text) => ({
    type: TASK_INPUT_CHANGE,
    text
});

const inputError = (errorMsg) => ({
    type: TASK_INPUT_ERROR,
    errorMsg
})

export {inputChange, inputError};