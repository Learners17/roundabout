import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.05)_0px,rgba(0,0,0,0.05)_2px,transparent_2px,transparent_26px),linear-gradient(rgb(110,75,54)_0%,rgb(92,64,48)_55%,rgb(59,42,32)_100%)]'>
     <Header/>
    </div>
  )
}

export default App
