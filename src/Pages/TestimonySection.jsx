import React from 'react';


function Testimony () {
  function seeStoriesBtn() {
    alert("Feature coming soon!")
  }
  function getStartedBtn() {
    alert("Feature coming soon!")
  }
    return (
      <section className="testimony-section">
        <div className="testy-container">
          <div className="testy"> 
            <h2>From Local Farms<br/> to National Reach</h2>
            <p>A tomato farmer in Kano can now sell directly to a restaurant in Lagos. A rice distributor in Ebonyi can connect with supermarkets in Abuja. Agromy isn’t just a marketplace it’s the bridge that brings Nigeria’s agricultural ecosystem closer together.</p>
            <button className="see-stories-btn" onClick={seeStoriesBtn}>See Success Stories</button>
          </div>
          
            <img src="./img/WomanLeaf.png" alt="womanleaf" />
          
      </div>

      
      <div className="cta">
        <img src="./img/Workers.png" alt="" />
        <h2>Join the Future of Agriculture Today</h2>
        <p>Agromy is not just about buying and selling it’s about creating prosperity, breaking barriers, and building the future of Nigerian agriculture. Be part of the movement.</p>
        <button className="get-started-btn" onClick={getStartedBtn}>Get Started Now</button>
      </div>
      </section>
    )
}
export default Testimony;