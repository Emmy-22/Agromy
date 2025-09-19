import React from 'react';
import { Package } from "lucide-react";

const MarketPlace = () => {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-center">
      {/* Section 1 */}
      <div className="py-6">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black mb-10">
          What You Get With Agromy
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Farmers */}
        <div className="bg-black text-white rounded-2xl p-10 sm:p-12 lg:p-14 shadow-md">
          <div className="w-60 h-14 mx-auto mb-6  bg-white text-black flex items-center justify-center rounded-full font-bold text-lg">
            <Package size={24} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">For Farmers</h3>
          <p className="text-base sm:text-lg">
            Reach nationwide buyers, sell directly, and get fair prices for your produce.
          </p>
        </div>

        {/* Buyers */}
        <div className="bg-black text-white rounded-2xl p-10 sm:p-12 lg:p-14 shadow-md">
          <div className="w-60 h-14 mx-auto mb-6 bg-white text-black flex items-center justify-center rounded-full font-bold text-lg">
            B
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">For Buyers</h3>
          <p className="text-base sm:text-lg">
            Find trusted farmers and supplies, compare prices, and buy with confidence.
          </p>
        </div>

        {/* Distributors */}
        <div className="bg-black text-white rounded-2xl p-10 sm:p-12 lg:p-14 shadow-md">
          <div className="w-60 h-14 mx-auto mb-6 bg-white text-black flex items-center justify-center rounded-full font-bold text-lg">
            D
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">For Distributors</h3>
          <p className="text-base sm:text-lg">
            Connect with verified partners and manage bulk trades efficiently.
          </p>
        </div>

        {/* Job Seekers */}
        <div className="bg-black text-white rounded-2xl p-10 sm:p-12 lg:p-14 shadow-md">
          <div className="w-60 h-14 mx-auto mb-6 bg-white text-black flex items-center justify-center rounded-full font-bold text-lg">
            J
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">For Job Seekers</h3>
          <p className="text-base sm:text-lg">
            Explore new opportunities in agriculture's growing digital economy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;