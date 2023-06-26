export const isConnectedSelector = (state) => state.isConnected
export const firstNameSelector = (state) => state.firstName
export const lastNameSelector = (state) => state.lastName
export const fullNameSelector = (state) =>
  `${state.firstName} ${state.lastName}`
export const updateDisplaySelector = (state) => state.isUpdateDisplayed
export const isLoadingSelector = (state) => state.isLoading
