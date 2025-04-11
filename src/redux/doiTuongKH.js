import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { khachHangApi } from "../services/khachHangApi";
import { handleFileContent } from "../ultilities/handleFileContent";

const handleFetchDoiTuongKH=createAsyncThunk('doiTuongKH/handleFetchDoiTuongKH',async()=>{
    const response=await khachHangApi.getList();
    return  response.data;
})

const initialState={
    doiTuongKH:undefined,
    title:"Đối tượng khách hàng:"
};
const doiTuongKHSlice=createSlice({
    name:"doiTuongKH",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(handleFetchDoiTuongKH.fulfilled,(state,action)=>{
                const data=handleFileContent(action.payload)
                state.doiTuongKH=data;
            })
    }
})
const doiTuongKHReducer=doiTuongKHSlice.reducer
export {doiTuongKHReducer, handleFetchDoiTuongKH}