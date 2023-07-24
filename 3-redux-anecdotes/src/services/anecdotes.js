import axios from "axios"

const baseUrl = "http://localhost:3001/anecdotes"

const getAnecdotes = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const postAnecdote = async (content) => {
  const body = { content, votes: 0 }
  const res = await axios.post(baseUrl, body)
  return res.data
}

const updateAnecdote = async (id, update) => {
  const result = await axios.put(`${baseUrl}/${id}`, update )
  return result.data
}

export { getAnecdotes, postAnecdote, updateAnecdote }
