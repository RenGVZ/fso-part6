import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector((state) => {
    if (state.filter === "") {
      return state.anecdotes
    } else {
      const filteredAnecdotes = state.anecdotes.filter((anecdote) => {
        return anecdote.content.toLowerCase().includes(state.filter)
      })
      return filteredAnecdotes
    }
  })

  return (
    <>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => dispatch(addVote(anecdote.id))}
          />
        ))}
    </>
  )
}

export default AnecdoteList
