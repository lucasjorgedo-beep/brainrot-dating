import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import memeReducer from './memeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    memes: memeReducer
  }
});

export default store;
