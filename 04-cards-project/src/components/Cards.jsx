import React from 'react'
import {Bookmark} from 'lucide-react'

const Cards = () => {
  return (
  <div className="card">
        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTgXgL9SYqiVaD9h--z-KuMqTNfQAb03Br3-imi7Gw9UkrrM2OQ94U5B4&s=10" alt="" />
          <button>save <Bookmark /> </button>
        
        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="buttom">
          <div>
            <div>
              <h3>$120hr/</h3>
              <p>Faisalabad,Pakistan</p>
            </div>
            <button>Apply Now</button>
          </div>
          
        </div>
      </div>
  )
}

export default Cards
