import React from 'react';
import { LockKeyhole } from "lucide-react";
import './MarketPlace.css'; 

const MarketPlace = () => {
  return (
    <section className="marketplace-section">
      {/* Section Title */}
      <div className="marketplace-title">
        <h2>What You Get With Agromy</h2>
      </div>

      {/* Cards Grid */}
      <div className="marketplace-grid">
        {/* Farmers */}
        <div className="marketplace-card">
          <div className="marketplace-icon">
            <LockKeyhole size={26} />
          </div>
          <h3>For Farmers</h3>
          <p>
            Reach nationwide buyers, sell directly, and get fair prices for your produce.
          </p>
        </div>

        {/* Buyers */}
        <div className="marketplace-card alt">
          <div className="marketplace-icon">
            <LockKeyhole size={26} />
          </div>
          <h3>For Buyers</h3>
          <p>
            Find trusted farmers and supplies, compare prices, and buy with confidence.
          </p>
        </div>

        {/* Distributors */}
        <div className="marketplace-card">
          <div className="marketplace-icon">
            <LockKeyhole size={26} />
          </div>
          <h3>For Distributors</h3>
          <p>
            Connect with verified partners and manage bulk trades efficiently.
          </p>
        </div>

        {/* Job Seekers */}
        <div className="marketplace-card alt">
          <div className="marketplace-icon">
            <LockKeyhole size={26} />
          </div>
          <h3>For Job Seekers</h3>
          <p>
            Explore new opportunities in agriculture's growing digital economy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;