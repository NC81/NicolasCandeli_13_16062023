import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user'
import errorReducer from '../features/error'

const combinedReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'user/userLogout') {
    state = undefined
    localStorage.removeItem('ArgentBank-token')
    sessionStorage.removeItem('ArgentBank-token')
  }
  return combinedReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer,
})
