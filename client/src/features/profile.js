import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'profile',
  initialState: {
    isConnected: false,
    // isLoading: false,
    firstName: null,
    lastName: null,
    isUpdateDisplayed: false,
  },
  reducers: {
    // isLoading: (draft, action) => {
    //   draft.isLoading = action.payload
    //   return
    // },
    userLoginOrUpdate: {
      prepare: (firstName, lastName) => ({
        payload: { firstName, lastName },
      }),
      reducer: (draft, action) => {
        if (!draft.isConnected) {
          draft.isConnected = true
        }
        if (draft.isConnected && draft.isUpdateDisplayed) {
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
      draft.isConnected = false
      return
    },
  },
})

export const { userLoginOrUpdate, updateDisplay, userLogout } = actions
export default reducer
