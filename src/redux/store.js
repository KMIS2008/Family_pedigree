import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authReducer } from "./auth/authSlice";
import {visitReducer } from './visits/visitsSlince';
import {checkReducer} from './check/checkSlice';
import {serviceReducer} from './services/serviceSlice';
import { feedbackReducer } from './feedBack/feedbackSlice';
import { scheduleReducer } from './schedule/scheduleSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    visits:visitReducer,
    check:checkReducer,
    services:serviceReducer,
    feedbacks: feedbackReducer,
    schedule: scheduleReducer,
  },
  
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    immutableCheck: false,
  }),
});

export const persistor = persistStore(store);