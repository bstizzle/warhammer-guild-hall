import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '../redux/characterSlice';

export const store = configureStore({
  reducer: {
    character: characterReducer
  },
});
