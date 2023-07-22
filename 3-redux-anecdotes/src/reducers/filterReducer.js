const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "FILTER":
      const text = action.payload.text
      return text
    default:
      return state
  }
}

export const filter = (text) => {
  return {
    type: "FILTER",
    payload: { text },
  }
}

export default filterReducer
