import { createSlice } from '@reduxjs/toolkit'

export const features = createSlice({
    name: 'categories',
    initialState:{
      allFeatures:[],
      flagFeatures:false
    },
    reducers: {
      addFeatures: (state, action) => {
          state.allFeatures = action.payload;
          state.flagFeatures = true;
      },
      changeFlagFeatures: (state, action) => {
          state.flagFeatures = action.payload;
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { addFeatures, changeFlagFeatures } = features.actions;
  