export const isConnectedSelector = (state) => state.user.isConnected
export const firstNameSelector = (state) => state.user.firstName
export const lastNameSelector = (state) => state.user.lastName
export const isLoadingSelector = (state) => state.user.isLoading
// export const isDisabledSelector = (state) =>
//   (state.user.isLoading || state.user.isConnected) && !state.error.hasError
//     ? true
//     : false
export const loadingClassSelector = (state) =>
  state.user.isLoading ? 'loading-button' : ''
export const hasErrorSelector = (state) => state.error.hasError
export const isErrorDisplayedSelector = (state) => state.error.isErrorDisplayed
export const errorContentSelector = (state) =>
  `${state.error.name}: ${state.error.message}`
// export const loginIsDisabledSelector = (state) =>
//   state.user.isLoading && !state.error.hasError ? true : false
export const isUpdateDisabledSelector = (newFirstName, newLastName) => {
  return (state) =>
    (state.user.firstName === newFirstName &&
      state.user.lastName === newLastName) ||
    state.user.isLoading
      ? true
      : false
}
