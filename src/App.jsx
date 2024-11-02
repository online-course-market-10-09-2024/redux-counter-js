import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment
} from './counter/counter'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="app">
      <h1>Vite + React + Redux Counter</h1>
      <div className="card">
        <button className='button' onClick={() => dispatch(increment())}>
          Increment +
        </button>
        <button className='button' onClick={() => dispatch(decrement())}>
          Decrement -
        </button>
        <p className='text-display-count'>count is: {count}</p>
      </div>
    </div>
  )
}

export default App