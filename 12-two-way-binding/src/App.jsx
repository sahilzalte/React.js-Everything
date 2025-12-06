import { useState } from "react";

const App = () => {


  const [title, setTitle] = useState('')



  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted by', title);

    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }
      }>
        <label htmlFor="name">Name:</label>
        <input required
          type="text"
          name="name"
          placeholder="Enter Name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }
          }
        />
        <button type="submit">Submit</button>
        <h1>{title}</h1>
      </form>
    </div>
  )
}

export default App