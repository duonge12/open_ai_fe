import { configureStore } from "@reduxjs/toolkit";
import { stepReducer } from "./stepSlice";
import { doiTuongKHReducer } from "./doiTuongKH";

export const store=configureStore({
    reducer:{
        listStep:stepReducer,
        doiTuongKH:doiTuongKHReducer
    }
})
 