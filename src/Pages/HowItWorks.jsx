import React from "react";
import "./HowItWorks.css";

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
    <section className="how-it-works">
      <div className="how-it-works-header">
        <h2>Simple, Transparent, Secure</h2>
        <p>How it works...</p>
      </div>

      <div className="steps-grid">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;