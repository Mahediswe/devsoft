import React from "react";
import { FaCheck } from "react-icons/fa";

const WhenToInvolveUX = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-cyan-300">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          When should you involve UX/UI experts?
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          You should bring in UI/UX experts when:
        </p>

        <ul className="space-y-4 mb-10">
          {[
            "you're starting an MVP or validating a product idea",
            "your users are confused, dropping off, or not converting",
            "you're scaling your product and need consistency across new features",
            "you're modernizing legacy software with usability issues",
            "you want to shorten dev time by solving problems at the design stage"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700 text-lg">{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <p className="text-gray-800 italic">
            "Our role isn't just to draw screens — it's to reduce risk, improve adoption, and make sure your product feels right the first time it's used."
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhenToInvolveUX;