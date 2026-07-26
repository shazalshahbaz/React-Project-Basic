import React from 'react'
import {Bookmark} from 'lucide-react'



const Cards = (props) => {
 console.log(props)
  return (
  <div className="card">
        <div className="top">
          <img src="{props.logo}" alt="logo" />
          <button>save <Bookmark /> </button>
        
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.postdate}</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>{props.t1}</h4>
            <h4>{props.t2}</h4>
          </div>
        </div>
        <div className="buttom">
          <div>
            <div>
              <h3>{props.pays}/</h3>
              <p>{props.locations}</p>
            </div>
            <button>Apply Now</button>
          </div>
          
        </div>
      </div>
  )
}

export default Cards
