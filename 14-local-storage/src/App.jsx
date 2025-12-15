
const App = () => {

  const obj = {
    userName: 'Sahil',
    age: 19,
    city: 'Nasik'
  }

  localStorage.setItem('user', JSON.stringify(obj))
  const user = localStorage.getItem('user')
  console.log(JSON.parse(user));








  return (
    <div>App</div>
  )
}

export default App