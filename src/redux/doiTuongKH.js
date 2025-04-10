import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { khachHangApi } from "../services/khachHangApi";
import { handleFileContent } from "../ultilities/handleFileContent";

const handleFetchDoiTuongKH=createAsyncThunk('doiTuongKH/handleFetchDoiTuongKH',async()=>{
    const response=await khachHangApi.getList();
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
                state.loading=false;
                const data=handleFileContent(action.payload)
                state.doiTuongKH=data;
            })
            .addCase(handleFetchDoiTuongKH.rejected,(state,action)=>{
                state.loading=false;
                state.doiTuongKH=['Error'];
            })
    }
})
const doiTuongKHReducer=doiTuongKHSlice.reducer
export {doiTuongKHReducer, handleFetchDoiTuongKH}