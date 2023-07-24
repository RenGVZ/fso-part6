import { createSlice } from "@reduxjs/toolkit"
import { postAnecdote } from "../services/anecdotes"

// const anecdotesAtStart = [
//   "If it hurts, do it more often",
//   "Adding manpower to a late software project makes it later!",
//   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//   "Premature optimization is the root of all evil.",
//   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
// ]

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteReducer = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addVote(state, action) {
      const id = action.payload
      const voteToAdd = state.find((vote) => vote.id === id)
      const newVote = { ...voteToAdd, votes: voteToAdd.votes + 1 }
      const newState = state.map((vote) => (vote.id === id ? newVote : vote))
      return newState
    },
    createNew(state, action) {
      const content = action.payload
      const newAnecdote = {
        content,
        id: getId(),
        votes: 0,
      }
      postAnecdote(newAnecdote)
      return [...state, newAnecdote]
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  },
})

// const anecdoteReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_VOTE":
//       const id = action.payload.id
//       const voteToAdd = state.find((vote) => vote.id === id)
//       const newVote = { ...voteToAdd, votes: voteToAdd.votes + 1 }
//       const newState = state.map((vote) => (vote.id === id ? newVote : vote))
//       return newState
//     case "CREATE_NEW":
//       const content = action.payload.content
//       const newAnecdote = {
//         id: getId(),
//         content,
//         votes: 0,
//       }
//       return [...state, newAnecdote]
//     default:
//       return state
//   }
// }

// export const addVote = (id) => {
//   return {
//     type: "ADD_VOTE",
//     payload: { id },
//   }
// }

// export const createNew = (content) => {
//   console.log("content:", content)
//   return {
//     type: "CREATE_NEW",
//     payload: { content },
//   }
// }

export const { addVote, createNew, setAnecdotes } =
  anecdoteReducer.actions
export default anecdoteReducer.reducer
