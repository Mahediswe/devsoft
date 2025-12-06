// src/components/ProcessTabs.jsx

import React, { useState } from "react";
import processSteps from "../data/processSteps";

const ProcessTabs = () => {
  const [active, setActive] = useState("scoping");
  const current = processSteps.find((step) => step.id === active);

  return (
    <section className="py-16 px-4 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Our web development <span className="text-blue-600">approach</span>
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We follow a well-established process in our custom web application
          development and consulting services, perfected and refined over a
          decade to ensure it is capable of delivering high-quality apps on
          time, within budget, and with minimal risk.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tab list */}
          <div className="bg-blue-50 rounded-md overflow-hidden">
            {processSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActive(step.id)}
                className={`block w-full text-left px-6 py-4 border-l-4 transition-all duration-200 ${
                  active === step.id
                    ? "bg-blue-600 text-white border-blue-600"
                    : "text-black border-transparent hover:bg-blue-100"
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="md:col-span-2 p-6">
            <h3 className="text-2xl font-semibold mb-4">{current.title}</h3>
            <p className="text-gray-700 mb-6">{current.description}</p>
            <ul className="list-none space-y-3">
              {current.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✔</span>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTabs;
