// Reducer for handling App mode switching

import {SWITCH} from '../actions/types';
import {ADD_MODE} from '../settings/settings';

const appModeReducer = (appMode = {mode: ADD_MODE, location: null}, action) => {
    switch(action.type) {
        case SWITCH:
            return ({
                mode: action.mode,
                location: action.location
            })
        default:
            return appMode;
    }
}

export {appModeReducer};