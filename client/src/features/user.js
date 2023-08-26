import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: {
    hasInitialData: false,
    firstName: null,
    lastName: null,
    isLoading: false,
    isRememberMeChecked: false,
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
    dataIsLoading: (draft, action) => {
      draft.isLoading = action.payload
    },
    rememberMeToggle: (draft, action) => {
      draft.isRememberMeChecked = action.payload
    },
    userLogout: (draft) => {
      draft.hasInitialData = false
    },
  },
})

export const {
  userLoginOrUpdate,
  dataIsLoading,
  rememberMeToggle,
  userLogout,
} = actions
export default reducer
