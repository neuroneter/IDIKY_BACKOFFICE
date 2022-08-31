import { createSlice } from '@reduxjs/toolkit'

export const categories = createSlice({
    name: 'categories',
    initialState:{
      allCategories:[],
      flagCategories:false
    },
    reducers: {
      addCategories: (state, action) => {
          state.allCategories = action.payload;
          state.flagCategories = true;
      },
      changeFlagCategories: (state, action) => {
          state.flagCategories = action.payload;
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { addCategories, changeFlagCategories } = categories.actions;
  