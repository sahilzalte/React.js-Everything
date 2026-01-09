import React from 'react'
import axios from 'axios'

const App = () => {

  const getData = async() => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response)
  }

  return (
    <div className="bg-black h-screen p-4 text-white">
      <button onClick={getData} className="bg-green-600 text-white px-5 py-2 mb-2 rounded active:scale-95 cursor-pointer">Get Data</button>
    </div>
  )
}

export default App