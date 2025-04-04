import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { instanceFiles } from "../services/axios";
import { handleFileContent } from "../ultilities/handleFileContent";

const handleFetchDoiTuongKH=createAsyncThunk('doiTuongKH/handleFetchDoiTuongKH',async()=>{
    const response=await instanceFiles.get('/doiTuongKH.txt');
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
                state.message="Loading";
            })
            .addCase(handleFetchDoiTuongKH.fulfilled,(state,action)=>{
                const fileContent=handleFileContent(action.payload.data)
                state.loading=false;
                state.doiTuongKH=fileContent
            })
    }
})
const doiTuongKHReducer=doiTuongKHSlice.reducer
export {doiTuongKHReducer, handleFetchDoiTuongKH}