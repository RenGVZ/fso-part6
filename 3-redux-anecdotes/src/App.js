import { useEffect} from 'react'
import { useDispatch } from "react-redux"
import AnecdoteList from "./components/AnecdoteList"
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteFilter from "./components/AnecdoteFilter"
import Notification from "./components/Notification"
import { useSelector } from "react-redux"
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  const notification = useSelector((state) => state.notification)

  useEffect(() => {
   dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      {notification && <Notification />}
      <AnecdoteFilter />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App
