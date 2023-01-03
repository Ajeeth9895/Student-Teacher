import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

//Redux store
export default configureStore({
    // Assigning user Reducer to users
    reducer:{
        users:userReducer
    }
})