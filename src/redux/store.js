import { configureStore } from '@reduxjs/toolkit' 
import ecartRedcuer from './ecartSlice'

export const store = configureStore({
    reducer : {
        ecart : ecartRedcuer
    }
  })