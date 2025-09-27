import React from "react";

const HowItWorks = () => {
  const steps = [
    { title: "Sign Up", desc: "Create your free account in minutes." },
    { title: "List or Search", desc: "Farmers list products; buyers search and compare." },
    { title: "Connect & Trade", desc: "Chat, negotiate, and finalize deals safely." },
    { title: "Trusted Payments", desc: "Secure transactions with built-in fraud protection." },
    { title: "Delivery Options", desc: "Choose logistics partners to move goods stress-free." },
  ];

  return (
    <section id="HowItWorks" className="w-full py-16 px-4 sm:px-6 lg:px-10 bg-[#5CE65C]/10">
      {/* Heading */}
      <div className="text-center mb-12 text-[#0F4D0F]">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
          Simple, Transparent, Secure
        </h2>
        <p className="text-lg md:text-xl">How it works...</p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 ">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#5CE65C] w-full text-[#0F4D0F] font-semibold rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center transition-all min-h-[220px] sm:min-h-[240px] lg:min-h-[260px] cursor-pointer hover:shadow-xl"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 border-b border-[#0F4D0F] pb-2">
              {step.title}
            </h3>
            <p className="text-sm md:text-base leading-snug">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
