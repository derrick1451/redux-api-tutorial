import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const url = 'https://randomuser.me/api/?results=5'
 export const fetchUsers = createAsyncThunk('get/getPosts',async()=>{
    try {
        const response = await axios.get(url);
       return response.data.results

    }catch(err){
        return err.message
    }
 
 })
const initialState = {
    users:[],
    isLoading:true,
    error: null,
}
export const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoading = false
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message

        })
    }
})
export default usersSlice.reducer