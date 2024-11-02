import { useState } from "react"
import Button from "../components/Button"

export function CounterPropsPage() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count+1)
  }
  const handleDecrement = () => {
    setCount(count-1)
  }

  return (
    <div className="app">
      <h1>Vite + React + Props Counter</h1>
      <div className="card">
        <Button name={"Increment +"} count={count} setCount={handleIncrement} />
        <Button name={"Decrement -"} count={count} setCount={handleDecrement} />
        <p className='text-display-count'>count is: {count}</p>
      </div>
    </div>
  )
}