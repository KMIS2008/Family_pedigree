import {addFeedback, fetchFeedback, deleteFeedback} from '../operations';
import { createSlice} from '@reduxjs/toolkit';

const allFeedback ={
    feedbacks:[],
    isLoading: false,
    error: false, 
}

const handlPending = (state)=> {
    state.isLoading = true}

const handlFulfilled = (state, action)=>{
        state.feedbacks = action.payload;
        state.isLoading = false;
        state.error = null;
     }

const handlFulfilledAdd = (state, action)=>{
        state.feedbacks.push(action.payload);
        state.isLoading = false;
        state.error = null;
      }

const handlFulfilledDelete = (state, action)=>{
        state.feedbacks = state.feedbacks.filter(feedback => feedback._id !== action.payload._id);
        }

const handlReject =(state, action)=>{
        state.isLoading = false;
        state.error = action.payload;
    }

const feedbackSlice = createSlice({
    name:'feedbacks',
    initialState: allFeedback,
       
       extraReducers:
       builder=>{
        builder.addCase(fetchFeedback.pending, handlPending)
        .addCase(fetchFeedback.fulfilled, handlFulfilled)
        .addCase(fetchFeedback.rejected, handlReject)
        .addCase(addFeedback.pending, handlPending)
        .addCase(addFeedback.fulfilled, handlFulfilledAdd)
        .addCase(addFeedback.rejected, handlReject)
        .addCase(deleteFeedback.pending, handlPending)
        .addCase(deleteFeedback.fulfilled, handlFulfilledDelete)
        .addCase(deleteFeedback.rejected, handlReject)
       }
})

export const feedbackReducer = feedbackSlice.reducer;