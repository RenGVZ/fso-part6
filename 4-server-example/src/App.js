import { useQuery, useMutation, useQueryClient } from "react-query"
import { getNotes, createNote, updateNote } from "./requests"

const App = () => {
  const queryClient = useQueryClient()

  const newNoteMutation = useMutation(createNote, {
    onSuccess: (newNote) => {
      // queryClient.invalidateQueries('notes')
      const notes = queryClient.getQueryData("notes")
      queryClient.setQueryData("notes", notes.concat(newNote))
    },
  })

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ""
    newNoteMutation.mutate({ content, important: true })
  }

  const updateNoteMutation = useMutation(updateNote, {
    onSuccess: (updatedNote) => {
      // queryClient.invalidateQueries("notes")
      const notes = queryClient.getQueryData("notes")
      queryClient.setQueryData(
        "notes",
        notes.map((note) =>
          note.id === updatedNote.id ? { ...updatedNote } : note
        )
      )
    },
  })

  const toggleImportance = (note) => {
    updateNoteMutation.mutate({ ...note, important: !note.important })
  }

  const { data, isLoading } = useQuery("notes", getNotes, {
    refetchOnWindowFocus: false,
  })

  console.log("data:", data)

  if (isLoading) {
    return <div>loading data...</div>
  }

  return (
    <div>
      <h2>Notes app</h2>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      {data.map((note) => (
        <li key={note.id} onClick={() => toggleImportance(note)}>
          {note.content}
          <strong> {note.important ? "important" : ""}</strong>
        </li>
      ))}
    </div>
  )
}

export default App
