import React from "react"
import { useDispatch } from "react-redux"
import { setNotification } from "../reducers/notificationReducer"
import { createAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createNote = async (e) => {
    e.preventDefault()
    const content = e.target.content.value
    dispatch(createAnecdote(content))
    dispatch(setNotification(content, 4000))
    e.target.content.value = ""
  }

  return (
    <form onSubmit={createNote}>
      <div>
        <input name="content" />
      </div>
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm
