import "./App.css"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import NewNote from "./components/NewNote"
import Notes from "./components/Notes"
import VisibilityFilter from "./components/VisibilityFilter"
import { getNotes } from "./services/notes"
import { setNotes } from "./reducers/noteReducer"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getNotes().then((notes) => dispatch(setNotes(notes)))
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <NewNote />
        <VisibilityFilter />
        <Notes />
      </header>
    </div>
  )
}

export default App
