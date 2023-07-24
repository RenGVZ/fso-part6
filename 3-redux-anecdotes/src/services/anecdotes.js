import axios from "axios"

const baseUrl = "http://localhost:3001/anecdotes"

const getAnecdotes = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const postAnecdote = async (content) => {
  const res = await axios.post(baseUrl, content)
  return res.data
}

export { getAnecdotes, postAnecdote }