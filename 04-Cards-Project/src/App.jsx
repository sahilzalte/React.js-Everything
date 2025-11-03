import React from 'react'
import { Bookmark } from 'lucide-react'
const App = () => {
  return (
    <>
      <div className='parent'>
        <div className="card">
          <div className="top">
            <img src="https://images.seeklogo.com/logo-png/28/2/amazon-logo-png_seeklogo-286206.png" alt="" />
            <button>Save <Bookmark /></button>
          </div>
          <div className="center">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div>
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
            </div>
          </div>
          <div className="bottom">
            <div className="">
              <h3>$120/hr</h3>
              <p>Mumbai, india</p>
            </div>
            <button>Apply</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App