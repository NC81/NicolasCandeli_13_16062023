import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'profile',
  initialState: {
    hasInitialData: false,
    isLoading: false,
    firstName: null,
    lastName: null,
    isUpdateDisplayed: false,
  },
  reducers: {
    dataIsLoading: (draft, action) => {
      draft.isLoading = action.payload
      return
    },
    userLoginOrUpdate: {
      prepare: (firstName, lastName) => ({
        payload: { firstName, lastName },
      }),
      reducer: (draft, action) => {
        if (!draft.hasInitialData) {
          draft.hasInitialData = true
        }
        if (draft.hasInitialData && draft.isUpdateDisplayed) {
          draft.isUpdateDisplayed = false
        }
        draft.firstName = action.payload.firstName
        draft.lastName = action.payload.lastName
        return
      },
    },
    updateDisplay: (draft, action) => {
      draft.isUpdateDisplayed = action.payload
      return
    },
    userLogout: (draft) => {
      draft.hasInitialData = false
      return
    },
  },
})

export const {
  dataIsLoading,
  hasToken,
  userLoginOrUpdate,
  updateDisplay,
  userLogout,
} = actions
export default reducer
