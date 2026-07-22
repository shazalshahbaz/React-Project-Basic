import React from 'react'

const Card = (Props) => {
    console.log(Props)
  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1780256001162-1076668eb095?q=80&w=974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{Props.user},{Props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card
