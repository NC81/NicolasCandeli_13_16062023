import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../features/user'
import errorReducer from '../features/error'

const removeStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === 'user/userLogout') {
    localStorage.removeItem('token')
  }
  return next(action)
}

export const store = configureStore({
  reducer: {
    user: profileReducer,
    error: errorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(removeStorageMiddleware),
})
