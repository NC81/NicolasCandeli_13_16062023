import { createAction } from '@reduxjs/toolkit'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  isConnected: false,
  firstName: null,
  lastName: null,
}

export const login = createAction('login', (firstName, lastName) => ({
  payload: { firstName, lastName },
}))
export const logout = createAction('logout')

export const loginReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(login, (draft, action) => {
      draft.isConnected = true
      draft.firstName = action.payload.firstName
      draft.lastName = action.payload.lastName
    })
    .addCase(logout, (draft, action) => {
      draft.isConnected = false
    })
)
