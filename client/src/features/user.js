import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: {
    hasInitialData: false,
    firstName: null,
    lastName: null,
  },
  reducers: {
    userLoginOrUpdate: {
      prepare: (firstName, lastName) => ({
        payload: { firstName, lastName },
      }),
      reducer: (draft, action) => {
        draft.hasInitialData = true
        draft.firstName = action.payload.firstName
        draft.lastName = action.payload.lastName
      },
    },
    userLogout: (draft) => {
      draft.hasInitialData = false
    },
  },
})

export const { dataIsLoading, userLoginOrUpdate, userLogout } = actions
export default reducer
