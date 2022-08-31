import { createSlice } from '@reduxjs/toolkit'

export const divipola = createSlice({
  name: 'divipola',
  initialState:{
    allDivipola:[],
    defaultCity:{value:'0', code:'0', label:'Ciudad'},
    defaultState:{value:'0', code:'0', label:'Departamento'},
  },
  reducers: {
    addDivipola: (state, action) => {
        state.allDivipola = action.payload;
    },

    setDefaultCity: (state, action) => {
      state.defaultCity = action.payload.city;
      state.defaultState = action.payload.state;
    },

  }
})

// Action creators are generated for each case reducer function
export const { addDivipola, setDefaultCity } = divipola.actions;

