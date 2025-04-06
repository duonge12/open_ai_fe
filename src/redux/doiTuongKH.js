import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceKH } from "../services/axios";
import { handleFileContent } from "../ultilities/handleFileContent";

const handleFetchDoiTuongKH=createAsyncThunk('doiTuongKH/handleFetchDoiTuongKH',async()=>{
    const response=await instanceKH.get('/');
    return  response.data;
})

const initialState={
    doiTuongKH:undefined,
    loading:false,
    message:''
 };
const doiTuongKHSlice=createSlice({
    name:"doiTuongKH",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(handleFetchDoiTuongKH.pending,(state)=>{
                state.loading=true;
                state.message="loading";
            })
            .addCase(handleFetchDoiTuongKH.fulfilled,(state,action)=>{
                state.loading=true;
                state.doiTuongKH=action.payload;
                state.message="success";
            })
    }
})
const doiTuongKHReducer=doiTuongKHSlice.reducer
export {doiTuongKHReducer, handleFetchDoiTuongKH}