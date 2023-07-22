const initialState = [
  {
    content: "reducer defines how redux store works",
    important: true,
    id: 1,
  },
  { content: "state of store can contain any data", important: false, id: 2 },
]

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_NOTE":
      return state.notes.concat(action.payload)
    case "TOGGLE_IMPORTANCE": {
      const id = action.payload.id
      const foundNote = state.find((n) => n.id === id)
      const noteToChange = { ...foundNote, important: !foundNote.important }
      return state.map((note) => (note.id !== id ? note : noteToChange))
    }
    default:
      return state
  }
}

export const createNote = (content) => {
  return {
    type: "NEW_NOTE",
    payload: {
      content,
      important: false,
      id: generateId(),
    },
  }
}

export const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    payload: { id },
  }
}

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export default noteReducer
