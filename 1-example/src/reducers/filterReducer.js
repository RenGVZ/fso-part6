const filterReducer = (state = "ALL", action) => {
  console.log('state:', state, 'action:', action);
  switch (action.type) {
    case "SET_FILTER":
      return action.payload
    default:
      return state
  }
}

export const filterChange = (filter) => {
  console.log('filter:', filter);
  return {
    type: "SET_FILTER",
    payload: filter,
  }
}

export default filterReducer
