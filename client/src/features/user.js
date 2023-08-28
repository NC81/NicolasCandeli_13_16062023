import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: {
    isConnected: false,
    firstName: null,
    lastName: null,
    isLoading: false,
  },
  reducers: {
    userLoginOrUpdate: {
      prepare: (firstName, lastName) => ({
        payload: { firstName, lastName },
      }),
      reducer: (draft, action) => {
        draft.isConnected = true
        draft.firstName = action.payload.firstName
        draft.lastName = action.payload.lastName
      },
    },
    dataIsLoading: (draft, action) => {
      draft.isLoading = action.payload
    },
    userLogout: () => {},
  },
})

export const { userLoginOrUpdate, dataIsLoading, userLogout } = actions
export default reducer
