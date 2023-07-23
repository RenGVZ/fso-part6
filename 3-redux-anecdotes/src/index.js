import React from "react"
import ReactDOM from "react-dom/client"
// import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import App from "./App"
import anecdoteReducer from "./reducers/anecdoteReducer"
import filterReducer from "./reducers/filterReducer"
import notificationReducer from './reducers/notificationReducer'
import { configureStore } from "@reduxjs/toolkit"

// const reducers = combineReducers({ anecdotes: anecdoteReducer, filter: filterReducer })
export const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  },
})

// store.subscribe(() => console.log(store.getState()))

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
)
