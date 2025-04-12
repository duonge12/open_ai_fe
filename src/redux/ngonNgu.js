import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleFileContent } from "../ultilities/handleFileContent";
import { ngonNguApi } from "../services/ngonNguApi";

const handleFetchNgonNgu=createAsyncThunk('ngonNgu/handleFetchNgonNgu',async()=>{
    const response=await ngonNguApi.getList();
    return  response.data;
})

const initialState={
    ngonNgu:undefined,
};
const ngonNguSlice=createSlice({
    name:"ngonNgu",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(handleFetchNgonNgu.fulfilled,(state,action)=>{
                const data=handleFileContent(action.payload)
                state.ngonNgu=data;
            })
    }
})
const ngonNguReducer=ngonNguSlice.reducer
export {ngonNguReducer, handleFetchNgonNgu}