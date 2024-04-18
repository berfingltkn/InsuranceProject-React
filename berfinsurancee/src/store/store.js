import {configureStore} from '@reduxjs/toolkit'
import {stepOneReducer} from './slice/stepOneSlice';


export const store=configureStore({
    reducer:{
        stepOne:stepOneReducer
    },
});