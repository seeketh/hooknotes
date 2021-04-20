// Lets combine reducers and export

import {combineReducers} from 'redux';
import {taskListReducer} from './tasklist';
import {taskInputReducer} from './taskinput';
import {appModeReducer} from './appmode';

const rootReducer = combineReducers({
    tasks: taskListReducer,
    input: taskInputReducer,
    edit: appModeReducer
})

export default rootReducer;