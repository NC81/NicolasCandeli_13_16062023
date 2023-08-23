import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'tools',
  initialState: {
    isLoading: false,
    isUpdateDisplayed: false,
    isRememberMeChecked: false,
  },
  reducers: {
    dataIsLoading: (draft, action) => {
      draft.isLoading = action.payload
    },
    updateDisplayToggle: (draft, action) => {
      draft.isUpdateDisplayed = action.payload
    },
    rememberMeToggle: (draft, action) => {
      draft.isRememberMeChecked = action.payload
    },
  },
})

export const { dataIsLoading, updateDisplayToggle, rememberMeToggle } = actions
export default reducer
