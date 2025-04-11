import { configureStore } from "@reduxjs/toolkit";
import { stepReducer } from "./stepSlice";
import { doiTuongKHReducer } from "./doiTuongKH";
import { toiLaReducer } from "./toiLa";

export const store=configureStore({
    reducer:{
        listStep:stepReducer,
        doiTuongKH:doiTuongKHReducer,
        toiLa:toiLaReducer,
    }
})
 