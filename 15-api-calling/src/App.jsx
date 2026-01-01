import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  // async function fetchData() {
  //   const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  // console.log(res);

  // }
  async function fetchData() {
    let response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }
  return (
    <div>
      <button onClick={fetchData}>Get Data</button>
      {data.map((element, index) => {
        return (
          <h3 key={index}>Hello{element.author}</h3>
        )
      })}
    </div>
  )
}

export default App