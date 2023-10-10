import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headingtext from './headingtext'
import Task from './tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className='profile-image'></div>
    <div className='texting'>
      <h className='plan'>Make a <span className='better'>better </span>plan</h><br></br>
      <h className='plan'>for your future</h>
      <h2 className='text-head'>Whoever you are, Whatever you're looking for, We<br></br> have the perfect place for you</h2>




  
    </div>
    <Task/>

    </>
  )
}

export default App
