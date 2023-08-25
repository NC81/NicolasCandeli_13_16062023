import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'tools',
  initialState: {
    isLoading: false,
    isRememberMeChecked: false,
  },
  reducers: {
    dataIsLoading: (draft, action) => {
      draft.isLoading = action.payload
    },
    rememberMeToggle: (draft, action) => {
      draft.isRememberMeChecked = action.payload
    },
  },
})

export const { dataIsLoading, rememberMeToggle } = actions
export default reducer
