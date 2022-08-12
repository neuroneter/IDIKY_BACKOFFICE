import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './states/Counter'
import { loadLocals } from './states/LoadLocals'
import { tmpImg } from './states/TmpImg'
import { brands } from './states/Brands'
import { categories } from './states/Categories'
import { suppliers } from './states/Suppliers'
import { divipola } from './states/Divipola'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    tmpImg: tmpImg.reducer,
    brands: brands.reducer,
    locals: loadLocals.reducer,
    categories: categories.reducer,
    suppliers: suppliers.reducer,
    divipola: divipola.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
