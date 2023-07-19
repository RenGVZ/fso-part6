import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { createStore } from "redux"
import noteReducer from "./reducers/noteReducer"

export const store = createStore(noteReducer)

store.dispatch({
  type: "NEW_NOTE",
  payload: { id: 0, content: "New note 1", important: false },
})

store.dispatch({
  type: "NEW_NOTE",
  payload: { id: 1, content: "New note 2", important: true },
})

store.dispatch({
  type: "TOGGLE_IMPORTANCE",
  payload: {
    id: 0,
  },
})

const root = ReactDOM.createRoot(document.getElementById("root"))
const renderApp = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

renderApp()
store.subscribe(renderApp)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
