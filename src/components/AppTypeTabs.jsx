// src/components/AppTypeTabs.jsx

import React, { useState } from "react";
import appTypes from "../data/appTypes";

const AppTypeTabs = () => {
  const [active, setActive] = useState("enterprise");
  const selected = appTypes.find((app) => app.id === active);

  return (
    <section className="py-16 px-4 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Web <span className="text-blue-600">applications</span> we develop
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We build high-performance, interactive, and user-friendly web
          applications that help companies streamline operations, improve
          customer experiences, and scale their businesses.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tabs */}
          <div className="bg-blue-50 rounded-md overflow-hidden">
            {appTypes.map((app) => (
              <button
                key={app.id}
                onClick={() => setActive(app.id)}
                className={`block w-full text-left px-6 py-4 border-l-4 transition-all duration-200 ${
                  active === app.id
                    ? "bg-blue-600 text-white border-blue-600"
                    : "text-black border-transparent hover:bg-blue-100"
                }`}
              >
                {app.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="md:col-span-2 p-6">
            <h3 className="text-2xl font-semibold mb-4">{selected.title}</h3>
            <p className="text-gray-700 mb-6">{selected.description}</p>
            <button className="px-6 py-2 border-2 border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition">
              {selected.linkText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppTypeTabs;
