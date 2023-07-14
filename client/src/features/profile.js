import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'profile',
  initialState: {
    hasInitialData: false,
    isLoading: false,
    firstName: null,
    lastName: null,
    isUpdateDisplayed: false,
    error: { hasError: false, name: null, message: null },
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
        draft.firstName = action.payload.firstName
        draft.lastName = action.payload.lastName
        if (!draft.hasInitialData) {
          draft.hasInitialData = true
        }
        if (draft.hasInitialData && draft.isUpdateDisplayed) {
          draft.isUpdateDisplayed = false
        }
        return
      },
    },
    errorUpdate: {
      prepare: (hasError, name, message) => ({
        payload: { hasError, name, message },
      }),
      reducer: (draft, action) => {
        draft.error.hasError = action.payload.hasError
        draft.error.name = action.payload.name
        draft.error.message = action.payload.message
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
  errorUpdate,
  userLoginOrUpdate,
  updateDisplay,
  userLogout,
} = actions
export default reducer
