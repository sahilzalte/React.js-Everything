
const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Submitted');

  }

  return (
    <>
      <div className="h-screen lg:flex">

        <form onSubmit={submitHandler} className="flex gap-4 items-start p-10 flex-col lg:w-1/2">
          <h1 className="text-3xl font-bold">Add Notes</h1>
          <input
            className="border-2 w-full rounded outline-none px-5 py-2"
            type=" text"
            placeholder="Enter Notes Heading" />
          <textarea
            className="border-2 w-full flex items-start flex-row h-32 rounded outline-none py-2 px-5"
            type="text"
            placeholder="Write Details"
          />
          <button className="bg-gray-700 w-full outline-none text-white rounded px-5 py-2 cursor-pointer hover:bg-gray-800 transition-all duration-300">
            Add Notes
          </button>

        </form>
        <div className="lg:w-1/2 lg:border-l p-10">
          <h1 className="text-4xl font-bold">Recent Notes</h1>
          <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-full">
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App