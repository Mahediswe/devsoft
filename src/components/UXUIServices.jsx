import React from "react";
import { FaCheck, FaStar } from "react-icons/fa";

const UXUIServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-cyan-300">
     

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">UX/UI design services</h1>
          
          <p className="text-xl text-gray-700 mb-8">
            DevSoft provides professional UI/UX design services to craft user-centric, business-driven digital products. We design intuitive interfaces that attract new users and keep them engaged, helping to build trust in your product and drive adoption. Trusted by global brands. 13+ years on the market. 250+ successful solutions.
          </p>

          {/* Checkmark Features */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start">
              <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">interfaces built on real user data, not assumptions</span>
            </div>
            <div className="flex items-start">
              <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">fully documented design</span>
            </div>
            <div className="flex items-start">
              <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Fortune 500 Clients served</span>
            </div>
            <div className="flex items-start">
              <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">enterprise-grade UX</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/3">
          {/* Consultation Card */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Book Free Consultation</h3>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Schedule Now
            </button>
          </div>

          {/* Rating Card */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Clients rate our services</h3>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-5 h-5" />
              ))}
              <span className="ml-2 font-bold text-gray-800">5.0</span>
            </div>
            <p className="text-gray-600">Based on 120+ client reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UXUIServices;