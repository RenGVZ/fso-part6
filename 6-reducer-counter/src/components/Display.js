import { useCounterValue } from "../context"

const Display = () => {
  const counter = useCounterValue()
  return <div>{counter}</div>
}

export default Display
