import "./App.css"
import NewNote from "./components/NewNote"
import Notes from "./components/Notes"
import VisibilityFilter from "./components/VisibilityFilter"

const App = () => {
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
