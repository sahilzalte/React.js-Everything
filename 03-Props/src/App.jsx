import React from 'react'
import Card from './components/card'


const App = () => {
  return (
    <>
      <div>
        <Card user='Sahil' age={25} />
        <Card user='John' age={30} />
        <Card user='Jane' age={28} />
      </div>
    </>
  )
}

export default App