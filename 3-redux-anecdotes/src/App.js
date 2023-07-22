import AnecdoteList from "./components/AnecdoteList"
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteFilter from "./components/AnecdoteFilter"

const App = () => {
  return (
    <div>
      <AnecdoteFilter />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App
