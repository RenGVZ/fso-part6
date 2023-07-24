import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { getNotes } from "./services/notes"
import App from "./App"

import noteReducer, { setNotes } from "./reducers/noteReducer"
import filterReducer from "./reducers/filterReducer"
import "./index.css"

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
})

getNotes().then((notes) => store.dispatch(setNotes(notes)))

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
