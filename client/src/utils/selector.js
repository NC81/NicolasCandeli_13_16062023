export const hasInitialDataSelector = (state) => state.user.hasInitialData
export const firstNameSelector = (state) => state.user.firstName
export const lastNameSelector = (state) => state.user.lastName
export const fullNameSelector = (state) =>
  `${state.user.firstName} ${state.user.lastName}`
export const updateDisplaySelector = (state) => state.user.isUpdateDisplayed
export const isLoadingSelector = (state) => state.user.isLoading
export const isDisabledSelector = (state) =>
  (state.user.isLoading || state.user.hasInitialData) && !state.error.hasError
    ? true
    : false
export const loadingClassSelector = (state) =>
  state.user.isLoading ? 'loading-button' : ''
export const hasErrorSelector = (state) => state.error.hasError
export const errorDisplaySelector = (state) => state.error.isErrorDisplayed
export const errorContentSelector = (state) =>
  `${state.error.name}: ${state.error.message}`
