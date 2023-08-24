export const hasInitialDataSelector = (state) => state.user.hasInitialData
export const firstNameSelector = (state) => state.user.firstName
export const lastNameSelector = (state) => state.user.lastName
export const fullNameSelector = (state) =>
  `${state.user.firstName} ${state.user.lastName}`
export const updateDisplaySelector = (state) => state.tools.isUpdateDisplayed
export const isLoadingSelector = (state) => state.tools.isLoading
// export const isDisabledSelector = (state) =>
//   (state.user.isLoading || state.user.hasInitialData) && !state.error.hasError
//     ? true
//     : false
export const loginIsDisabledSelector = (state) =>
  state.user.isLoading && !state.error.hasError ? true : false
export const loadingClassSelector = (state) =>
  state.tools.isLoading ? 'loading-button' : ''
export const hasErrorSelector = (state) => state.error.hasError
export const errorDisplaySelector = (state) => state.error.isErrorDisplayed
export const errorContentSelector = (state) =>
  `${state.error.name}: ${state.error.message}`
export const rememberMeSelector = (state) => state.tools.isRememberMeChecked
export const updateIsDisabledSelector = (newFirstName, newLastName) => {
  return (state) =>
    (state.user.firstName === newFirstName &&
      state.user.lastName === newLastName) ||
    state.tools.isLoading
      ? true
      : false
}
