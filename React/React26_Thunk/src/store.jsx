import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slice1"


export const store=configureStore({
    reducer:{
        slice1:slice1Reducer
    }
})