import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

//Redux store
export default configureStore({
    reducer:{
        users:userReducer
    }
})