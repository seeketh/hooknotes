// Task input reducer
// Manages task input and error

import {TASK_INPUT_CHANGE, TASK_INPUT_ERROR} from '../actions';

const taskInputReducer = (input = {text: '', errorMsg: ''}, action) => {
    switch(action.type) {
        case TASK_INPUT_CHANGE:
            return ({
                text: action.text,
                errorMsg: ''
            });
        case TASK_INPUT_ERROR:
            return ({
                text: '',
                errorMsg: action.errorMsg
            });
        default:
            return input;
    }
}

export {taskInputReducer};