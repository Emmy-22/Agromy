import Navbar from "./Component/Navbar"
import HeroSection from "./Pages/HeroSection"
import About from "./Pages/About"


const App = () => {
  return (
    <div>
      <div className="hero2">
      <Navbar />
      <HeroSection />
      </div>
      <About />
    </div>
  )
}

export default App
