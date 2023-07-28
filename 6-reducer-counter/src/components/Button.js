import { useCounterDispatch } from "../context"

const Button = ({ type, text }) => {
  const dispatch = useCounterDispatch()
  return <button onClick={() => dispatch({ type })}>{text}</button>
}

export default Button
