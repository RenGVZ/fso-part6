import AnecdoteForm from "./components/AnecdoteForm"
import Notification from "./components/Notification"
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getAnecdotes, updateAnecdote } from "./services/anecdotes"
import { useNotificationDispatch } from "./context/NotificationContext"

const App = () => {
  const NotificationDispatch = useNotificationDispatch()
  const queryClient = useQueryClient()
  const { data, error } = useQuery("anecdotes", getAnecdotes, {
    refetchOnWindowFocus: false,
    retry: 1,
  })
  console.log("results data:", data)

  const upvoteMutation = useMutation("anecdotes", updateAnecdote, {
    onSuccess: (update) => {
      // queryClient.invalidateQueries('anecdotes')
      const anecdotes = queryClient.getQueryData("anecdotes", getAnecdotes)
      queryClient.setQueryData(
        "anecdotes",
        anecdotes.map((a) => (a.id === update.id ? update : a))
      )
      NotificationDispatch({ type: "UPVOTE", content: update.content })
    },
  })

  const handleVote = (anecdote) => {
    upvoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
  }

  if (error) {
    return (
      <div>anecdote service not available due to problems in the server</div>
    )
  }

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {data?.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
