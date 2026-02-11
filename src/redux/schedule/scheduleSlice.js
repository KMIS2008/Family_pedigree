import {addSchedule, fetchSchedule, deleteSchedule} from '../operations';
import { createSlice} from '@reduxjs/toolkit';

const allSchedule ={
    schedule:[],
    isLoading: false,
    error: false, 
}

const handlPending = (state)=> {
    state.isLoading = true}

const handlFulfilled = (state, action)=>{
        state.schedule = action.payload;
        state.isLoading = false;
        state.error = null;
     }

const handlFulfilledAdd = (state, action)=>{
        state.schedule.push(action.payload);
        state.isLoading = false;
        state.error = null;
      }

const handlFulfilledDelete = (state, action)=>{
        state.schedule = state.schedule.filter(schedule => schedule._id !== action.payload._id);
        }

const handlReject =(state, action)=>{
        state.isLoading = false;
        state.error = action.payload;
    }

const scheduleSlice = createSlice({
    name:'schedule',
    initialState: allSchedule,
       
       extraReducers:
       builder=>{
        builder.addCase(fetchSchedule.pending, handlPending)
        .addCase(fetchSchedule.fulfilled, handlFulfilled)
        .addCase(fetchSchedule.rejected, handlReject)
        .addCase(addSchedule.pending, handlPending)
        .addCase(addSchedule.fulfilled, handlFulfilledAdd)
        .addCase(addSchedule.rejected, handlReject)
        .addCase(deleteSchedule.pending, handlPending)
        .addCase(deleteSchedule.fulfilled, handlFulfilledDelete)
        .addCase(deleteSchedule.rejected, handlReject)
       }
})

export const scheduleReducer = scheduleSlice.reducer;