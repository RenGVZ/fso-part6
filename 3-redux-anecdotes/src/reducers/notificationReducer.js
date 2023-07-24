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
      return ""
    },
  },
})

export const { setCreateNotification, setVoteNotification, resetNotification } =
  notificationReducer.actions

export const setNotification = (content, duration, type) => {
  return async (dispatch) => {
    if (
      type === "upvote"
        ? dispatch(setVoteNotification(content))
        : dispatch(setCreateNotification(content))
    )
      setTimeout(() => {
        dispatch(resetNotification())
      }, duration)
  }
}

export default notificationReducer.reducer
