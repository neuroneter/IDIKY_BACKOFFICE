import { createSlice } from '@reduxjs/toolkit'

export const tmpImg = createSlice({
  name: 'Imagenes Temporales',
  initialState:{
    allTmpImg:[]
  },
  reducers: {
    insert: (state, action) => {
      state.allTmpImg = action.payload.allTmpImg;
    },
  },
})

// Action creators are generated for each case reducer function
export const { insert } = tmpImg.actions;

