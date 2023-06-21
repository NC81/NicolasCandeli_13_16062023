import { createAction } from '@reduxjs/toolkit'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  isConnected: false,
  firstName: null,
}

export const login = createAction('login', (firstName) => ({
  payload: { firstName },
}))

export const loginReducer = createReducer(initialState, (builder) =>
  builder.addCase(login, (draft, action) => {
    draft.isConnected = true
    draft.firstName = action.payload.firstName
  })
)
