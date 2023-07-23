import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"
import { setVoteNotification, resetNotification } from "../reducers/notificationReducer"

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
      return [...state.anecdotes].sort((a, b) => b.votes - a.votes)
    } else {
      const filteredAnecdotes = state.anecdotes.filter((anecdote) => {
        return anecdote.content.toLowerCase().includes(state.filter)
      })
      return filteredAnecdotes
    }
  })

  const handleUpvote = (item) => {
    dispatch(addVote(item.id))
    dispatch(setVoteNotification(item.content))
    setTimeout(() => {
      dispatch(resetNotification())
    }, 2000)
  }

  return (
    <>
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => handleUpvote(anecdote)}
        />
      ))}
    </>
  )
}

export default AnecdoteList
