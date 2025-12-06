import React from "react";
import {
  FaSearch,
  FaPalette,
  FaChessKnight,
  FaMobileAlt,
  FaDesktop,
  FaUserCheck
} from "react-icons/fa";

const UXUIServicesDetailed = () => {
  const services = [
    {
      icon: <FaSearch className="text-blue-500 text-2xl" />,
      title: "User research and analysis",
      description: "We bring clarity to projects by replacing assumptions with facts. For existing products, we use tools like Hotjar and Google Analytics to analyze user behavior, obstacles, and preferences. For new products, we conduct interviews, surveys, and ethnographic studies to uncover motivations and frustrations. This research drives every design decision, ensuring the final product aligns with real user needs.",
      benefits: [
        "Reduced user friction",
        "Better engagement metrics",
        "Fewer redesigns needed"
      ]
    },
    {
      icon: <FaPalette className="text-purple-500 text-2xl" />,
      title: "Custom user experience design",
      description: "We design intuitive product experiences built around how users think and behave. Applying cognitive psychology and design thinking, we remove barriers between users and their goals. Every interaction is mapped, simplified, and validated with your team using tools like Miro and Figma.",
      benefits: [
        "Intuitive interfaces",
        "Real-time collaboration",
        "Higher user retention"
      ]
    },
    {
      icon: <FaChessKnight className="text-green-500 text-2xl" />,
      title: "UX strategy and design",
      description: "Good design starts with a clear direction. We define UX strategy by connecting business goals to user needs and turning those into measurable outcomes. This includes designing user flows, navigation, and interactions that boost both engagement and retention.",
      benefits: [
        "Goal-aligned designs",
        "Purposeful interfaces",
        "Measurable outcomes"
      ]
    },
    {
      icon: <FaMobileAlt className="text-orange-500 text-2xl" />,
      title: "Wireframing and interactive prototyping",
      description: "We create detailed wireframes and high-fidelity prototypes that bring your product to life before development begins. This allows for early testing and validation of concepts, saving time and resources.",
      benefits: [
        "Early concept validation",
        "Reduced development costs",
        "Clear visual direction"
      ]
    },
    {
      icon: <FaDesktop className="text-red-500 text-2xl" />,
      title: "Web and mobile app UX design",
      description: "Our responsive designs work seamlessly across all devices and platforms. We specialize in creating consistent experiences whether users access your product on mobile, tablet, or desktop.",
      benefits: [
        "Cross-platform consistency",
        "Device-optimized interfaces",
        "Seamless user journeys"
      ]
    },
    {
      icon: <FaUserCheck className="text-yellow-500 text-2xl" />,
      title: "Usability testing",
      description: "We conduct rigorous usability testing with real users to identify pain points and areas for improvement. Our testing methods ensure your product meets actual user needs before launch.",
      benefits: [
        "Real user feedback",
        "Identified pain points",
        "Data-driven refinements"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-cyan-400">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our UX/UI design services
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-3 rounded-lg mr-4">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
            </div>
            <p className="text-gray-700 mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UXUIServicesDetailed;