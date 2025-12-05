import React, { useState } from 'react'

const App = () => {
  const [count, setcount] = useState(0)

  function Add() {
    setcount(count + 1)
  }
  function Sub() {
    if (count > 0) {
      setcount(count - 1)
    }
    else {
      setcount(0)
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Add}>increase</button>
      <button onClick={Sub}>decrease</button>
    </div>
  )
}

export default App