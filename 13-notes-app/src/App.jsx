import { useState } from "react";

const App = () => {

  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')

  const [task, settask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault();

    const CopyTask = [...task];
    CopyTask.push({
      title,
      details
    })

    settask(CopyTask);
    console.log(CopyTask);


    settitle('');
    setdetails('');
  }
  const deleteNote = (idx) => {
    const CopyTask = [...task];
    CopyTask.splice(idx, 1);
    settask(CopyTask);

  }

  return (
    <>
      <div className="h-screen lg:flex">

        <form onSubmit={submitHandler} className="flex gap-4 items-start p-10 flex-col lg:w-1/2">
          <h1 className="text-3xl font-bold">Add Notes</h1>


          <input required
            className="border-2 w-full rounded outline-none px-5 py-2"
            type=" text"
            placeholder="Enter Notes Heading"
            value={title}
            onChange={(e) => {
              settitle(e.target.value)
            }} />


          <textarea required
            className="border-2 w-full flex items-start flex-row h-32 rounded outline-none py-2 px-5"
            type="text"
            placeholder="Write Details"
            value={details}
            onChange={(e) => {
              setdetails(e.target.value)
            }}
          />


          <button className="bg-gray-700 w-full outline-none text-white rounded px-5 py-2 cursor-pointer hover:bg-gray-800 transition-all duration-300">
            Add Notes
          </button>

        </form>
        <div className="lg:w-1/2 lg:border-l p-10">
          <h1 className="text-4xl font-bold">Recent Notes</h1>
          <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-[90%] items-start">
            {task.map(function (elem, idx) {

              return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                <div>
                  <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                  <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
                </div>
                <button onClick={() => {
                  deleteNote(idx)
                }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded-3xl font-bold text-white'>Delete</button>
              </div>
            })}

          </div>
        </div>
      </div>
    </>
  )
}

export default App