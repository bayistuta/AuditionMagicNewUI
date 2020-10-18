import rootReducer, { RootState } from './rootReducer'
import { configureStore, Action } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: rootReducer
})

export default store