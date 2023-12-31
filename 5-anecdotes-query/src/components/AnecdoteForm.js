import { useNotificationDispatch } from "../context/NotificationContext"
import { useQueryClient, useMutation } from "react-query"
import { getAnecdotes, createAnecdote } from "../services/anecdotes"

const AnecdoteForm = () => {
  const notificationDispatch = useNotificationDispatch()

  const queryClient = useQueryClient()
  const createNewMutation = useMutation(createAnecdote, {
    onSuccess: (update) => {
      // queryClient.invalidateQueries('anecdotes')
      const anecdotes = queryClient.getQueryData("anecdotes", getAnecdotes)
      queryClient.setQueryData("anecdotes", anecdotes.concat(update))
      notificationDispatch({ type: "NEW_NOTE", content: update.content })
    },
    onError: (error) => {
      console.log('error:', error);
      notificationDispatch({ type: "ERROR", content: error.response.data.error ?? 'error'})
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ""
    createNewMutation.mutate({ content, votes: 0 })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
