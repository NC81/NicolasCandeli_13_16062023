import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from '../features/profile'

export const store = configureStore({
  reducer: profileReducer,
})
