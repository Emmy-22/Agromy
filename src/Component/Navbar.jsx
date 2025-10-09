import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="navbar">
      <a href="#"  className="logo">Agromy</a>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#HeroSection" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#About" onClick={() => setIsOpen(false)}>About Us</a></li>
        <li><a href="#MarketPlace" onClick={() => setIsOpen(false)}>Marketplace</a></li>
        <li><a href="#HowItWorks" onClick={() => setIsOpen(false)}>How It Works</a></li>
        <li><a href="https://agromy-webapp-gb2jazrxg-agromys-projects-1774feed.vercel.app" className="Join"  onClick={() => setIsOpen(false)}>Join Now</a></li>
      </ul>

      <a href="https://agromy-webapp-gb2jazrxg-agromys-projects-1774feed.vercel.app" className="JoinNow" onClick={() => setIsOpen(false)}>Join Now</a>
    </nav>
  );
};

export default Navbar;