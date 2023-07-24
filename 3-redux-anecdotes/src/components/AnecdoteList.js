import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setNotification } from "../reducers/notificationReducer"
import { upVote } from "../reducers/anecdoteReducer"

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
    dispatch(upVote(item.id))
    dispatch(setNotification(item.content, 4000, 'upvote'))
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
