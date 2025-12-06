// src/components/ServiceTabs.jsx

import React, { useState } from "react";
import serviceData from "../data/serviceData ";

const ServiceTabs = () => {
  const [active, setActive] = useState("rnd");
  const current = serviceData.find((s) => s.id === active);

  return (
    <section className="bg-[#0a1e3f] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Custom web application development
        </h2>
        <p className="text-blue-400 text-2xl font-medium mb-8">services</p>

        <div className="flex flex-wrap justify-center gap-6 border-b border-gray-600 pb-4 mb-12">
          {serviceData.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex flex-col items-center px-4 py-2 transition ${
                active === s.id
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <div className="text-3xl mb-1">📘</div> {/* Replace with icons */}
              <span className="text-sm">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 items-center gap-12 text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-4">{current.title}</h3>
            <p className="mb-6 text-gray-300">{current.desc}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside text-sm text-blue-100">
              {current.bullets.map((point, i) => (
                <li key={i}>✔ {point}</li>
              ))}
            </ul>
            <div className="mt-4 text-red-400 text-sm underline cursor-pointer">
              Learn more
            </div>
          </div>
          <div>
            <img
              src={current.image}
              alt={current.title}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTabs;
