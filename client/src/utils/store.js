import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../features/profile'

const removeStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === 'profile/userLogout') {
    localStorage.removeItem('token')
  }
  return next(action)
}

export const store = configureStore({
  reducer: profileReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(removeStorageMiddleware),
})
