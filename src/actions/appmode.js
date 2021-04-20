// Action creators for switching applicaton mode between add and edit modes.

import {SWITCH} from './types';

const switchMode = (mode, location) => ({
    type: SWITCH,
    mode,
    location
});

export  {switchMode};