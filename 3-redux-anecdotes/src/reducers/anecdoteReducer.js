import { createSlice } from "@reduxjs/toolkit"
import {
  getAnecdotes,
  postAnecdote,
  updateAnecdote,
} from "../services/anecdotes"

const anecdoteReducer = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload
    },
  },
})

export const { setAnecdotes } = anecdoteReducer.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await getAnecdotes()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    await postAnecdote(content)
    const anecdotes = await getAnecdotes()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const upVote = (id) => {
  return async (dispatch) => {
    const anecdotes = await getAnecdotes()
    const anecdoteToUpvote = anecdotes.find((vote) => vote.id === id)
    const update = { ...anecdoteToUpvote, votes: anecdoteToUpvote.votes + 1 }
    await updateAnecdote(id, update)
    const newAnecdotes = await getAnecdotes()
    dispatch(setAnecdotes(newAnecdotes))
  }
}

export default anecdoteReducer.reducer
