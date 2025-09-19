import { useState } from 'react'
import './App.css'
import MarketPlace from './Pages/MarketPlace'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MarketPlace />
    </>
  )
}

export default App
