import { createSlice } from '@reduxjs/toolkit'

export const brands = createSlice({
  name: 'brands',
  initialState:{
    allBrands:[],
    flagBrands:false
  },
  reducers: {
    addBrands: (state, action) => {
        state.allBrands = action.payload;
        state.flagBrands = true;
    },
    changeFlag: (state, action) => {
        state.flagBrands = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { addBrands, changeFlag } = brands.actions;


