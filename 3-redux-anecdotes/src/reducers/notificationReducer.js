import { createSlice } from "@reduxjs/toolkit"

const initialState = ""

const notificationReducer = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setCreateNotification(state, action) {
      return `New anecdote created: ${action.payload}`
    },
    setVoteNotification(state, action) {
      return `You upvoted '${action.payload}'`
    },
    resetNotification(state, action) {
      return ''
    }
  },
})

export const { setCreateNotification, setVoteNotification, resetNotification } =
  notificationReducer.actions
export default notificationReducer.reducer
