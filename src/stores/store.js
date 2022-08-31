import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './states/store/Counter'
import { loadLocals } from './states/store/LoadLocals'
import { tmpImg } from './states/store/TmpImg'
import { brands } from './states/store/Brands'
import { categories } from './states/store/Categories'
import { suppliers } from './states/store/Suppliers'
import { divipola } from './states/store/Divipola'
import { features } from './states/store/Features'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    tmpImg: tmpImg.reducer,
    brands: brands.reducer,
    locals: loadLocals.reducer,
    categories: categories.reducer,
    suppliers: suppliers.reducer,
    divipola: divipola.reducer,
    features: features.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
