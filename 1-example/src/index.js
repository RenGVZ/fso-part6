import React from "react"
import ReactDOM from "react-dom/client"
import { createStore } from "redux"
import { Provider } from "react-redux"

import App from "./App"
import noteReducer from "./reducers/noteReducer"
import "./index.css"

export const store = createStore(noteReducer)

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
)
