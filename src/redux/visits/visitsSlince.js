import { createSlice} from '@reduxjs/toolkit';
import {fetchvisits, addCount} from '../operations';

const Count = {
    visitCount: 0,
    isLoading:false,
    error:false,
  };

  const handlPending = (state)=> {
    state.isLoading = true}

    const handlFulfilled = (state, action) => {
        if (Array.isArray(action.payload) && action.payload.length > 0) {
          // Если payload — массив с элементами
          state.visitCount = action.payload[0].count;
        } else {
          // Если payload не массив или массив пуст
          state.visitCount = 0; // Или любое значение по умолчанию
        }
        state.isLoading = false;
        state.error = null;
      };

const handlReject =(state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
}

  const visitSlice = createSlice({
      name:'visits',
      initialState: Count,
         
         extraReducers:
         builder=>{
          builder.addCase(fetchvisits.pending, handlPending)
          .addCase(fetchvisits.fulfilled, handlFulfilled)
          .addCase(fetchvisits.rejected, handlReject)
          .addCase(addCount.pending, handlPending)
          .addCase(addCount.fulfilled, handlFulfilled)
          .addCase(addCount.rejected, handlReject)
         }
  })

export const visitReducer = visitSlice.reducer;
  