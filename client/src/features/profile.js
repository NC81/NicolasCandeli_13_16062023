import { createAction } from '@reduxjs/toolkit'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  isConnected: false,
  firstName: null,
  lastName: null,
  isUpdateDisplayed: false,
}

export const userLogin = createAction('user/login', (firstName, lastName) => ({
  payload: { firstName, lastName },
}))
export const userUpdate = createAction(
  'user/update',
  (firstName, lastName) => ({
    payload: { firstName, lastName },
  })
)
export const updateDisplay = createAction('update/open')
export const userLogout = createAction('user/logout')

export const profileReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(userLogin, (draft, action) => {
      draft.isConnected = true
      draft.firstName = action.payload.firstName
      draft.lastName = action.payload.lastName
      return
    })
    .addCase(userUpdate, (draft, action) => {
      draft.firstName = action.payload.firstName
      draft.lastName = action.payload.lastName
      draft.isUpdateDisplayed = false
      return
    })
    .addCase(updateDisplay, (draft, action) => {
      draft.isUpdateDisplayed = action.payload
      return
    })
    .addCase(userLogout, (draft) => {
      draft.isConnected = false
      return
    })
)
