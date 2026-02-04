import React from 'react'

const Navbar = () => {
    return (
        <div className='flex py-4 px-8 bg-cyan-900 justify-between'>
            <h2 className='text-xl font-bold'>Professor</h2>
            <div className="flex gap-8"> 
                <a className='text-lg font-medium' href="/">Home</a>
                <a className='text-lg font-medium' href="/about">About</a>
                <a className='text-lg font-medium' href="/contact">Contact</a>
            </div>
        </div>
    )
}

export default Navbar