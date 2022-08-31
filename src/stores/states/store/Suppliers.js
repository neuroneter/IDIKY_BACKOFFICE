import { createSlice } from '@reduxjs/toolkit'

export const suppliers = createSlice({
  name: 'suppliers',
  initialState: {
    allSuppliers: [],
    flagSuppliers: false,
  },
  reducers: {
    addSupliers: (state, action) => {
      state.allSuppliers = action.payload
      state.flagSuppliers = true
    },
    changeFlagSuppliers: (state, action) => {
      state.flagSuppliers = action.payload
    },
  },
})

export const { addSuppliers, changeFlagSuppliers } = suppliers.actions
