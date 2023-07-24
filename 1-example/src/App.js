import "./App.css"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import NewNote from "./components/NewNote"
import Notes from "./components/Notes"
import VisibilityFilter from "./components/VisibilityFilter"
import { initializeNotes } from "./reducers/noteReducer"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeNotes())
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
