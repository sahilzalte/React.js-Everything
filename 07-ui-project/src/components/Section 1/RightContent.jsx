
import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);

  return (
    <div className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
      {props.users.map((user, id) => {
        return <RightCard key={id}  id={id} img={user.img} tag={props.tag} />
      })}
    </div>
  )
}

export default RightContent