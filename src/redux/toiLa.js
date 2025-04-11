import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleFileContent } from "../ultilities/handleFileContent";
import { toiLaApi } from "../services/toiLaApi";

const handleFetchToiLa=createAsyncThunk('toiLa/handleFetchToiLa',async()=>{
    const response=await toiLaApi.getList();
    return  response.data;
})

const initialState={
    toiLa:undefined,
    title:"Tôi là:"
};
const toiLaSlice=createSlice({
    name:"toiLa",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(handleFetchToiLa.fulfilled,(state,action)=>{
                const data=handleFileContent(action.payload)
                state.toiLa=data;
            })
    }
})
const toiLaReducer=toiLaSlice.reducer
export {toiLaReducer, handleFetchToiLa}