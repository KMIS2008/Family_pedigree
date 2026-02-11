import { createSlice} from '@reduxjs/toolkit';
import {checkPassword} from '../operations';

const allCheck ={
    password:"",
    isLoading: false,
    error: false, 
}

const handlPending = (state)=> {
    state.isLoading = true}

const handlFulfilled = (state, action)=>{
    state.password = action.payload;
    state.isLoading = false;
    state.error = null;
 }

 const handlReject = (state, action) => {
    state.isLoading = false;
    state.error = action.payload || action.error.message || 'Щось пішло не так!';
};

const checkSlice = createSlice({
    name:'check',
    initialState: allCheck,
       
       extraReducers:
       builder=>{
        builder.addCase(checkPassword.pending, handlPending)
        .addCase(checkPassword.fulfilled, handlFulfilled)
        .addCase(checkPassword.rejected, handlReject)
       }
})

export const checkReducer = checkSlice.reducer;
