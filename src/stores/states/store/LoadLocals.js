import { Locals } from '../../data/Locals';
import { createSlice } from '@reduxjs/toolkit'

export const loadLocals = createSlice({
  name: 'locals',
  initialState:{
    language:'es_col',
    locals:Locals.filter(local => local.language === 'es_col')[0]
  },
  reducers: {
    getLocals: (state, action) => {
        state.language = action.payload.language;
        state.locals = action.payload.locals;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getLocals } = loadLocals.actions;

