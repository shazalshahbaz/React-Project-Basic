import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="Parent">
      <Card user='shazal' age={23}/>
      <Card user='Abdull-Mateen' age={23}/>  
      <Card user='Abdul-Basit' age={29}/>
      
    </div>
  )
}

export default App
