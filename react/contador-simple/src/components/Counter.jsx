import React from 'react'
import { useState } from 'react'
import './Counter.scss'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className={'counter'}>
      <h2 className={'counter__title'}>Simple Counter</h2>
      <p className={'counter__value'}>{count}</p>
      <div className={'counter__buttons'}>
        <button
          className={'counter__button counter__button--subtract'}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button
          className={'counter__button counter__button--add'}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Counter
