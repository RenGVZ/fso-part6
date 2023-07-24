import axios from "axios"

const baseUrl = "http://localhost:3001/notes"

const getNotes = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createNew = async (content) => {
  const object = { content, important: false }
  console.log('object:', object);
  const res = await axios.post(baseUrl, object)
  console.log('res.data:', res.data);
  return res.data
}

export { getNotes, createNew }
