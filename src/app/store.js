import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import characterReducer from '../redux/characterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    character: characterReducer
  },
});
