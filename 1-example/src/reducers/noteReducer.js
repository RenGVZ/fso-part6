import { createSlice } from "@reduxjs/toolkit"
import { getNotes, createNew } from "../services/notes"

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    // createNote(state, action) {
    //   state.push(action.payload)
    // },
    toggleImportanceOf(state, action) {
      const id = action.payload
      const foundNote = state.find((n) => n.id === id)
      const noteToChange = {
        ...foundNote,
        important: !foundNote.important,
      }
      // console.log('state:', JSON.parse(JSON.stringify(state)));
      return state.map((note) => (note.id !== id ? note : noteToChange))
    },
    appendNote(state, action) {
      state.push(action.payload)
    },
    setNotes(state, action) {
      return action.payload
    },
  },
})

export const { toggleImportanceOf, appendNote, setNotes } = noteSlice.actions

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await getNotes()
    dispatch(setNotes(notes))
  }
}

export const createNote = (content) => {
  return async (dispatch) => {
    await createNew(content)
    const allNotes = await getNotes()
    dispatch(setNotes(allNotes))
  }
}

export default noteSlice.reducer
