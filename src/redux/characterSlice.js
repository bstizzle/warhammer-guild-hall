import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({
  name: 'character',
  initialState: {},
  reducers: {
    setChar: (state, action) => {
      console.log(action)
      const newState = {...state, character: action.payload}
      console.log(newState)
      return newState;
    }
  }
})

export const { setChar } = characterSlice.actions;

export const selectChar = (state) => {
  console.log(state.character.character)
  return state.character.character;
}

export default characterSlice.reducer;