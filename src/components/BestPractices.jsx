import React from "react";
import {
  FaUserCircle,
  FaDatabase,
  FaTachometerAlt,
  FaFileAlt,
  FaShieldAlt,
  FaSyncAlt
} from "react-icons/fa";

const BestPractices = () => {
  const practices = [
    {
      icon: <FaUserCircle className="text-blue-500 text-2xl" />,
      title: "User-centric design",
      description: "We prioritize intuitive and responsive design, ensuring seamless user experiences across all devices. Our team focuses on fast load times and consistent interfaces to enhance user satisfaction."
    },
    {
      icon: <FaDatabase className="text-green-500 text-2xl" />,
      title: "Efficient data use & connectivity",
      description: "We minimize data consumption and build apps with offline functionality, so users can continue using the app without interruptions. We also optimize API calls for better speed and performance."
    },
    {
      icon: <FaTachometerAlt className="text-purple-500 text-2xl" />,
      title: "Performance & speed",
      description: "We optimize the code and handle data efficiently, minimizing load times while ensuring low battery and memory consumption. Our apps run smoothly, even with heavy features."
    },
    {
      icon: <FaFileAlt className="text-orange-500 text-2xl" />,
      title: "Clear documentation",
      description: "We maintain comprehensive internal documentation to ensure smooth development and easy handoff. We also provide users with clear guides and FAQs to improve their in-app experience."
    },
    {
      icon: <FaShieldAlt className="text-red-500 text-2xl" />,
      title: "Robust security",
      description: "We implement industry-standard security measures, including strong data encryption, secure authentication methods, and safe third-party integrations, to ensure that user data is always protected."
    },
    {
      icon: <FaSyncAlt className="text-yellow-500 text-2xl" />,
      title: "Iterative improvements",
      description: "We continuously monitor app performance using analytics and actively incorporate user feedback to refine features, fix bugs, and enhance overall usability."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-teal-300">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our best practices in mobile app development
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We established comprehensive guidelines during the past years, combining the best industry practices and our internal guidelines to deliver high-quality, user-focused mobile applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {practices.map((practice, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-3 rounded-lg mr-4">
                {practice.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{practice.title}</h2>
            </div>
            <p className="text-gray-700">{practice.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestPractices;