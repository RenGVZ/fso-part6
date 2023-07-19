import "./App.css"
import { store } from "./index"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {store.getState().map((note) => (
            <li key={note.id}>
              {note.content}
              <br /> <strong>{note.important ? "important" : ""}</strong>
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App
