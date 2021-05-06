import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({
  name: 'character',
  initialState: {
    character: {}
  },
  reducers: {
    setChar: (state, action) => {
      console.log(action)
      state.character = action.payload;
      console.log(state.character)
    }
  }
})

export const { setChar } = characterSlice.actions;

export const selectChar = (state) => state.character.character;

export default characterSlice.reducer;