import React from "react";
import { FaApple, FaAndroid, FaCode, FaGlobe } from "react-icons/fa";

const DevelopmentCapabilities = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-blue-300">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our custom mobile app development capabilities
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We offer comprehensive <span className="font-bold">end-to-end mobile app development services</span>, covering every major platform and technology:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* iOS Development */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FaApple className="text-blue-600 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">iOS app development</h2>
          </div>
          <div className="border-b border-gray-200 mb-6"></div>
          <p className="text-gray-700 mb-4">
            Expert native development for Apple products. The iOS ecosystem encompasses a variety of gadgets: iOS, iPad, macOS, tvOS, and watchOS.
          </p>
          <p className="text-gray-700">
            Our expertise in developing native applications enables us to use all gadget capabilities, including camera, GPS, Touch ID, Face ID, Apple Pay, Apple Wallet, and more.
          </p>
        </div>

        {/* Android Development */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <FaAndroid className="text-green-600 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Android app development</h2>
          </div>
          <div className="border-b border-gray-200 mb-6"></div>
          <p className="text-gray-700">
            Android apps that we build with Kotlin. We ensure broad device compatibility across the fragmented Android landscape, seamless launch for different Android versions, and integration of modern technologies like AI and IoT.
          </p>
        </div>

        {/* Cross-platform */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <FaCode className="text-purple-600 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Cross-platform apps</h2>
          </div>
          <div className="border-b border-gray-200 mb-6"></div>
          <p className="text-gray-700">
            Develop once, deploy everywhere. We create high-performance cross-platform apps using React Native and Flutter that deliver near-native experience while saving development time and costs.
          </p>
        </div>

        {/* PWAs */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <FaGlobe className="text-orange-600 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Progressive Web Apps</h2>
          </div>
          <div className="border-b border-gray-200 mb-6"></div>
          <p className="text-gray-700">
            Our PWAs deliver app-like experiences in browsers, installable on home screens without app stores. They work offline, load instantly, and provide seamless experiences across all devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentCapabilities;