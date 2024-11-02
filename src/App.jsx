import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount
} from './counter/counter'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Vite + React + Redux Counter</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Add 5
        </button>
        <p>count is: {count}</p>
      </div>
    </div>
  )
}

export default App