import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import HeroText from './HeroText'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3  flex flex-col justify-between'>
      <HeroText />
      <div>
        <ArrowUpRight size={140} />
      </div>
    </div>
  )
}

export default LeftContent