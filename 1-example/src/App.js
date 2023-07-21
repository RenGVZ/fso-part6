import "./App.css"
import NewNote from "./components/NewNote"
import Notes from "./components/Notes"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NewNote />
        <Notes />
      </header>
    </div>
  )
}

export default App
