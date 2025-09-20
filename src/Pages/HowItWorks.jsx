import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Sign Up",
      desc: "Create your free account in minutes.",
    },
    {
      title: "List or Search",
      desc: "Farmers list products; buyers search and compare.",
    },
    {
      title: "Connect & Trade",
      desc: "Chat, negotiate, and finalize deals safely.",
    },
    {
      title: "Trusted Payments",
      desc: "Secure transactions with built-in fraud protection.",
    },
    {
      title: "Delivery Options",
      desc: "Choose logistics partners to move goods stress-free.",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-18 px-4 sm:px-8 lg:px-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Simple, Transparent, Secure
        </h2>
        <p className="text-lg md:text-xl text-gray-500">How it works...</p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white w-full text-black rounded-2xl shadow-md p-4 lg:py-6 lg:px-2 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all min-h-[240px] sm:min-h-[260px] lg:min-h-[280px]"
          >
            <h3 className="text-3xl md:text-2xl font-bold mb-2 pb-2 border-b-2 border-gray-300">
              {step.title}
            </h3>
            <p className="text-sm md:text-base text-black leading-snug px-4">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
