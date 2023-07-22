import React from "react"
import { filter } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const AnecdoteFilter = () => {
  const dispatch = useDispatch()

  return (
    <form>
      <p>Filter anecdotes</p>
      <input
        type="text"
        name="filter"
        onChange={(e) => dispatch(filter(e.target.value))}
      />
    </form>
  )
}

export default AnecdoteFilter
