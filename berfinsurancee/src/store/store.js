import {configureStore} from '@reduxjs/toolkit'
import {stepOneReducer} from './slice/stepOneSlice';
import { policyReducer } from './slice/policySlice';


export const store=configureStore({
    reducer:{
        stepOne:stepOneReducer,
        policySlice:policyReducer
    },
});