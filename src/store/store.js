import {configureStore} from "@reduxjs/toolkit";
import TodoReducer from "./Reducers/UserSlice";

export const store = configureStore({
    reducer:{
        todo:TodoReducer
    }
})