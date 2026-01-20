import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([]);


  const getData = async () => {
    let response = await axios.get('https://picsum.photos/v2/list?page=3&limit=15')
    setUserData(response.data);
  }


  useEffect(() => {
    getData();
  }, [])



  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>


  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <div key={idx} >
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden bg-white rounded-xl' key={idx}>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">

      <div className="flex flex-wrap gap-4 p-2">

        {printUserData}

      </div>
      <div className="flex justify-center gap-6 items-center p-4">
        <button className='bg-amber-400 cursor-pointer active:scale-95 text-sm text-black rounded px-4 font-semibold py-4'>Prev</button>
        <button className='bg-amber-400 cursor-pointer active:scale-95 text-sm text-black rounded px-4 font-semibold py-4'>Next</button>
      </div>
    </div>
  )
}

export default App