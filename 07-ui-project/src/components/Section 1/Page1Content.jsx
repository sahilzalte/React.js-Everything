import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-10 flex gap-10 h-[90vh] px-18'>
      <LeftContent />
 <RightContent users={props.users} tag={props.tag}  />
    </div>
  )
}

export default Page1Content