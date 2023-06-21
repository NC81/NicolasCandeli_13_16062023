export const isConnectedSelector = (state) => state.isConnected
export const firstNameSelector = (state) => state.firstName
export const fullNameSelector = (state) =>
  `${state.firstName} ${state.lastName}`
