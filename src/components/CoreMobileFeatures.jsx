import React from "react";
import { 
  FaUserShield, 
  FaUserCog, 
  FaCompass, 
  FaKeyboard,
  FaCheck 
} from "react-icons/fa";

const CoreMobileFeatures = () => {
  const features = [
    {
      icon: <FaUserShield className="text-blue-500 text-2xl" />,
      title: "User access & identity",
      description: "We implement core authentication flows to keep users secure and engaged from the start.",
      items: [
        "User registration and login",
        "Social sign-in (Google, Apple, Facebook)",
        "Password reset and verification",
        "Role-based access (if needed)"
      ]
    },
    {
      icon: <FaUserCog className="text-purple-500 text-2xl" />,
      title: "User profile & settings",
      description: "Let users manage their experience and preferences easily.",
      items: [
        "Profile creation and editing",
        "Avatar upload and image crop",
        "Language and notification preferences",
        "Light/dark mode toggle"
      ]
    },
    {
      icon: <FaCompass className="text-green-500 text-2xl" />,
      title: "Content discovery & navigation",
      description: "Smooth navigation helps users get what they need with zero frustration.",
      items: [
        "Bottom tab and side menu navigation",
        "Splash screen and onboarding flows",
        "In-app search and sorting",
        "Scrollable lists and grid layouts"
      ]
    },
    {
      icon: <FaKeyboard className="text-orange-500 text-2xl" />,
      title: "Input & interaction",
      description: "Core components to collect and process user input.",
      items: [
        "Forms with validation",
        "Ratings, reviews, and comments",
        "Image and file uploads",
        "Contact forms and feedback modules"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-slate-400">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Core mobile features for mobile apps
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Every successful mobile app starts with the proper foundation. At SumatoSoft, we have more than 13 years of solid background in developing basic features for mobile applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex items-start mb-6">
              <div className="bg-blue-50 p-3 rounded-lg mr-4">
                {feature.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{feature.title}</h2>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            </div>
            <ul className="space-y-3">
              {feature.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreMobileFeatures;