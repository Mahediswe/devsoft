import React from "react";
import {
  FaMapMarkerAlt,
  FaBell,
  FaCreditCard,
  FaMicrophone,
  FaRobot,
  FaCloudDownloadAlt,
  FaArrowRight
} from "react-icons/fa";

const AdvancedMobileFeatures = () => {
  const featureCards = [
    {
      icon: <FaMapMarkerAlt className="text-red-500 text-2xl" />,
      title: "Geolocation services",
      description: "We integrate GPS, map tools, and geofencing to deliver location-based experiences, like tailored ads for nearby shoppers or real-time navigation for delivery apps."
    },
    {
      icon: <FaBell className="text-yellow-500 text-2xl" />,
      title: "Push notifications",
      description: "Keep users engaged with timely alerts, reminders, and personalized messages that drive retention and conversions."
    },
    {
      icon: <FaCreditCard className="text-green-500 text-2xl" />,
      title: "In-app payments",
      description: "Secure payment gateways and seamless checkout experiences to boost transactions and revenue."
    },
    {
      icon: <FaMicrophone className="text-blue-500 text-2xl" />,
      title: "Voice recognition",
      description: "Enable hands-free control and natural language interactions for superior accessibility and convenience."
    },
    {
      icon: <FaRobot className="text-purple-500 text-2xl" />,
      title: "Chatbots",
      description: "AI-powered virtual assistants that provide instant support and personalized recommendations 24/7."
    },
    {
      icon: <FaCloudDownloadAlt className="text-indigo-500 text-2xl" />,
      title: "Offline Mode",
      description: "Full functionality even without internet connection, with automatic sync when back online."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-emerald-300">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Advanced mobile features we deliver
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          At SumatoSoft, we pack your mobile app with powerful features to solve user pain points and drive business growth.
          Our tailored solutions keep users engaged and help you stand out in a crowded market.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {featureCards.map((feature, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gray-100 p-3 rounded-lg mr-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
            </div>
            <p className="text-gray-600 mb-4 flex-grow">{feature.description}</p>
            <a href="/" className="text-blue-600 font-medium inline-flex items-center mt-auto">
              Learn more <FaArrowRight className="ml-2" />
            </a>
          </div>
        ))}
      </div>

      {/* Expanded Geolocation Section */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
            <div className="bg-red-100 p-4 rounded-lg inline-block mb-4">
              <FaMapMarkerAlt className="text-red-500 text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Geolocation services</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 inline-flex items-center">
              Get started <FaArrowRight className="ml-2" />
            </button>
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-700 mb-6">
              We integrate GPS, map tools, and geofencing to deliver location-based experiences,
              like tailored ads for nearby shoppers or real-time navigation for delivery apps. Your
              app connects users with what matters most, boosting engagement and loyalty.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Precise tracking</h4>
                <p className="text-gray-600">Accurate location detection with minimal battery impact</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Geofencing</h4>
                <p className="text-gray-600">Trigger actions when users enter/exit defined areas</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Map integration</h4>
                <p className="text-gray-600">Seamless maps with custom markers and routes</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Location analytics</h4>
                <p className="text-gray-600">Valuable insights into user movement patterns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedMobileFeatures;