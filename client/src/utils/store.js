import { combineReducers, configureStore } from '@reduxjs/toolkit'
import profileReducer from '../features/user'
import errorReducer from '../features/error'
import toolsReducer from '../features/tools'

const combinedReducer = combineReducers({
  user: profileReducer,
  error: errorReducer,
  tools: toolsReducer,
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
