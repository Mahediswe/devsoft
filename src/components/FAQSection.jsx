// src/components/FAQSection.jsx

import React, { useState } from "react";
import faqData from "../data/faqData";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // default: first open

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center">Frequently asked questions</h2>

      <div className="border-t border-gray-200">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-100">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 px-2 focus:outline-none text-lg font-medium flex justify-between items-center"
            >
              <span className={`${openIndex === index ? 'text-blue-600' : 'text-gray-800'}`}>
                {faq.question}
              </span>
              <span className="text-blue-600 text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="text-gray-600 px-2 pb-4 whitespace-pre-line">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="text-sm text-red-500 hover:underline">Load more ›</button>
      </div>
    </section>
  );
};

export default FAQSection;
