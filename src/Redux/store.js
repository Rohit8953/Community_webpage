import {configureStore} from '@reduxjs/toolkit'
import slices from "./appSlice";

export const store=configureStore({
    reducer:{
        app:slices
    }
})
