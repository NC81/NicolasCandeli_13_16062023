import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../features/user'
import errorReducer from '../features/error'
import toolsReducer from '../features/tools'

const removeStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === 'user/userLogout') {
    localStorage.removeItem('ArgentBank-token')
  }
  return next(action)
}

export const store = configureStore({
  reducer: {
    user: profileReducer,
    error: errorReducer,
    tools: toolsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(removeStorageMiddleware),
})
