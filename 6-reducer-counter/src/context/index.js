import { createContext, useContext, useReducer } from "react"

const counterReducer = (state, action) => {
  console.log("state:", state)
  console.log("action:", action)
  switch (action.type) {
    case "INC":
      return state + 1
    case "DEC":
      return state - 1
    case "ZERO":
      return 0
    default:
      return state
  }
}

export const CounterContext = createContext(0)

export const useCounterValue = () => {
  const counterValueAndDispatch = useContext(CounterContext)
  return counterValueAndDispatch[0]
}

export const useCounterDispatch = () => {
  const counterAndDispatch = useContext(CounterContext)
  return counterAndDispatch[1]
}

const CounterProvider = ({ children }) => {
  const [counter, dispatchCounter] = useReducer(counterReducer, 0)

  return (
    <CounterContext.Provider value={[counter, dispatchCounter]}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
