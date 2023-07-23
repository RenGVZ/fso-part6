import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const VisibilityFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filter)

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      all
      <input
        name="filter"
        type="radio"
        onChange={() => dispatch(filterChange("ALL"))}
        checked={filter === "ALL"}
      />
      important
      <input
        name="filter"
        type="radio"
        onChange={() => dispatch(filterChange("IMPORTANT"))}
        checked={filter === "IMPORTANT"}
      />
      non important
      <input
        name="filter"
        type="radio"
        onChange={() => dispatch(filterChange("NONIMPORTANT"))}
        checked={filter === "NONIMPORTANT"}
      />
    </div>
  )
}

export default VisibilityFilter
