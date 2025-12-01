import React from 'react'
import Section1 from './components/Section 1/Section1'
import Section2 from './components/Section 2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://images.pexels.com/photos/28765155/pexels-photo-28765155/free-photo-of-stylish-woman-in-sunglasses-against-red-wall.png?auto=compress&cs=tinysrgb&w=600&loading=lazy',
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.pexels.com/photos/28050408/pexels-photo-28050408.jpeg',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://images.pexels.com/photos/28050408/pexels-photo-28050408.jpeg',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://images.pexels.com/photos/33512765/pexels-photo-33512765.jpeg',
      intro: '',
      tag: 'UnderBanked'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App