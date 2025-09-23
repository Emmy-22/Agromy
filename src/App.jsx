
import Navbar from "./Component/Navbar"
import HeroSection from "./Pages/HeroSection"
import About from "./Pages/About"
import MarketPlace from './Pages/MarketPlace'
import HowItWorks from './Pages/HowItWorks'
import './App.css'

const App = () => {
  return (

    <div>
      <div className="hero2">
      <Navbar />
      <HeroSection />
      </div>
      <About />
      <MarketPlace />
      <HowItWorks />
    </div>

  )
}

export default App
