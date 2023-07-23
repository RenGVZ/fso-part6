import React from "react"
import { createNew } from "../reducers/anecdoteReducer"
import { useDispatch } from "react-redux"
import {
  setCreateNotification,
  resetNotification,
} from "../reducers/notificationReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createNote = (e) => {
    e.preventDefault()
    const content = e.target.content.value
    dispatch(createNew(content))
    dispatch(setCreateNotification(content))
    setTimeout(() => {
      dispatch(resetNotification())
    }, 2000)
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
