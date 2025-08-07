// src/components/ContactSection.jsx

import React from 'react';
import { FaPaperclip, FaCalendarAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f1d3f] to-[#1e193e] text-white py-16 px-6 md:px-20 max-w-7xl mx-auto ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-semibold text-blue-500 mb-6">Let’s start</h2>
          <div className="text-white space-y-5 text-lg">
            <div>
              <p className="font-bold text-sm text-gray-300 mb-2">WHAT’S NEXT</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-4 h-4 mt-1.5 border-2 border-blue-500 rounded-full bg-blue-500 mr-4"></div>
                  <span>1. Share your requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 mt-1.5 border-2 border-white rounded-full bg-white mr-4"></div>
                  <span>2. Analyze them with our experts</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 mt-1.5 border-2 border-white rounded-full bg-white mr-4"></div>
                  <span>3. Get a detailed proposal</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 mt-1.5 border-2 border-white rounded-full bg-white mr-4"></div>
                  <span>4. Kick off the project</span>
                </li>
              </ul>
            </div>
            <p className="pt-6 text-sm">
              If you have any questions, email us <br />
              <span className="text-red-400 font-semibold">info@sumatosoft.com</span>
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-semibold">My Name*</label>
            <input
              type="text"
              placeholder="John Smith"
              className="w-full p-3 rounded bg-transparent border border-gray-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Email Address*</label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full p-3 rounded bg-transparent border border-gray-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Message*</label>
            <textarea
              placeholder="Describe your idea"
              className="w-full p-3 rounded bg-transparent border border-gray-500 focus:outline-none h-28 resize-none"
            ></textarea>
          </div>

          <p className="text-xs text-gray-400">
            Please be informed that when you click the Send button Sumatosoft will process your
            personal data in accordance with our{' '}
            <span className="text-blue-400 underline">Privacy notice</span> for the purpose of
            providing you with appropriate information. This site is protected by reCAPTCHA and the
            Google <span className="text-red-400 underline">Privacy Policy</span> and{' '}
            <span className="text-red-400 underline">Terms of Service</span> apply.
          </p>

          {/* Attach & Send */}
          <div className="flex items-center justify-between flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 text-white">
              <FaPaperclip />
              <span className="text-sm">Attach file</span>
            </div>
            <button className="bg-[#fd4d5c] hover:bg-[#e0404f] transition px-10 py-2 rounded text-white font-semibold">
              Send
            </button>
          </div>

          {/* Person Info + Book */}
          <div className="pt-8 border-t border-gray-700 flex items-center justify-between">
            <div className="flex items-center gap-4 mt-4">
              <img
                src="https://www.sumatosoft.com/wp-content/uploads/2023/09/Vlad.png"
                alt="Vlad"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">Vlad Fedortsov</p>
                <p className="text-sm text-gray-400">Account Manager</p>
              </div>
            </div>
            <button className="flex items-center gap-2 border border-[#fd4d5c] px-4 py-2 rounded mt-4 hover:bg-[#fd4d5c] transition">
              <FaCalendarAlt />
              <span>Book a consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
