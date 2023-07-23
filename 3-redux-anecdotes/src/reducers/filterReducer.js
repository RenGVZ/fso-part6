import { createSlice } from "@reduxjs/toolkit"

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case "FILTER":
//       const text = action.payload.text
//       return text
//     default:
//       return state
//   }
// }

// export const filter = (text) => {
//   return {
//     type: "FILTER",
//     payload: { text },
//   }
// }

const initialState = ""

const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filter(state, action) {
      const text = action.payload
      return text
    },
  },
})

export const { filter } = filterReducer.actions
export default filterReducer.reducer
