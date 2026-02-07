import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate()



    return (
        <div className='flex py-4 px-8 bg-cyan-900 justify-between'>
            <button onClick={() => {
                navigate('/')
            }
            }
                className='cursor-pointer p-10 m-10 bg-blue-500 text-white px-4 py-2 rounded'>
                Return to Home Page
            </button>
            <button onClick={() => {
                navigate(-1)
            }
            }
                className='cursor-pointer p-10 m-10 bg-blue-500 text-white px-4 py-2 rounded'>
                Back
            </button>

            <button onClick={() => {
                navigate(+1)
            }
            }
                className='cursor-pointer p-10 m-10 bg-blue-500 text-white px-4 py-2 rounded'>
                Next
            </button>
            {/* <h1>Navbar2 Page</h1> */}
        </div>
    )
}

export default Navbar2