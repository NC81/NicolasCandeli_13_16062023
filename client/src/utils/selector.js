export const hasInitialDataSelector = (state) => state.hasInitialData
export const firstNameSelector = (state) => state.firstName
export const lastNameSelector = (state) => state.lastName
export const fullNameSelector = (state) =>
  `${state.firstName} ${state.lastName}`
export const updateDisplaySelector = (state) => state.isUpdateDisplayed
export const isLoadingSelector = (state) => state.isLoading
export const loadingClassSelector = (state) =>
  state.isLoading ? 'loading-button' : ''
export const errorContentSelector = (state) =>
  `${state.error.name}: ${state.error.message}`
export const visibleErrorClassSelector = (state) =>
  state.error.hasError ? 'visible' : ''
