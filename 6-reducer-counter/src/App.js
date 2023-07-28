import Display from "./components/Display"
import Button from "./components/Button"

function App() {
  return (
    <div className="App">
      <Display />
      <Button text="+" type="INC" />
      <Button text="-" type="DEC" />
      <Button text="0" type="ZERO" />
    </div>
  )
}

export default App
