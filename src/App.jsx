import Navbar from "./Component/Navbar"
import HeroSection from "./Pages/HeroSection"
import About from "./Pages/About"
import MarketPlace from './Pages/MarketPlace'
import HowItWorks from './Pages/HowItWorks'
import Testimony from "./Pages/TestimonySection";
import FooterSection from "./Pages/FooterSection";
import './App.css'

function App() {
  

  return (
     <div>
      <div className="hero2">
      <Navbar />
      <HeroSection />
      </div>
      <About />
      <MarketPlace />
      <HowItWorks />
      <Testimony />
      <FooterSection />
    </div>
     
  )
}

export default App; 