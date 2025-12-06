const App = () => {
  let submitHandler = (e) => {
    console.log('Form Submitted');
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }
      }>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App