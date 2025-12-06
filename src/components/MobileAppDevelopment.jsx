import React from "react";

const MobileAppDevelopment = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-blue-900">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Enterprise-grade mobile app development services for iOS, Android & cross-platform
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Leverage our expertise in mobile app development services to create scalable, high-performance apps that engage users and drive business growth.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md flex-1 max-w-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Swift & Kotlin</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>IoT & wearable integration</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Development</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>AI & machine learning features</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex-1 max-w-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Flutter & React Native</h3>
          <p className="text-gray-700">Cross-platform solutions for maximum reach and efficiency.</p>
        </div>
      </div>

      <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full mb-4 md:mb-0 transition duration-300">
          Book a call
        </button>
        
        <div className="flex items-center">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-bold text-gray-800">5.0</span>
          <span className="ml-2 text-gray-600">Clients rate our services</span>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;