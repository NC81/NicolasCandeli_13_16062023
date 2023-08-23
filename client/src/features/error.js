import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'error',
  initialState: {
    hasError: null,
    name: null,
    message: null,
    isErrorDisplayed: false,
  },
  reducers: {
    errorUpdate: {
      prepare: (hasError, name, message) => ({
        payload: { hasError, name, message },
      }),
      reducer: (draft, action) => {
        draft.hasError = action.payload.hasError
        draft.name = action.payload.name
        draft.message = action.payload.message
        if (draft.hasError) {
          draft.isErrorDisplayed = true
        }
      },
    },
    errorDisplayToggle: (draft, action) => {
      draft.isErrorDisplayed = action.payload
    },
  },
})

export const { errorUpdate, errorDisplayToggle } = actions
export default reducer
