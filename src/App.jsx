import { useState } from 'react'
import './App.css'
import MarketPlace from './Pages/MarketPlace'
import HowItWorks from './Pages/HowItWorks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MarketPlace />
      <HowItWorks />
    </>
  )
}

export default App
