import React from "react";

const MobileAppServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-blue-500">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Mobile app development services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We build mobile apps that meet your business goals with precision and care:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Consulting & Strategy */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Consulting & Strategy</h2>
          <p className="text-gray-700 mb-6">
            A vague plan can sink your app before it launches. We kick off with a focused consulting session to dive deep into your business goals, target audience, and market landscape. Our team studies competitors and user behavior to craft a strategy that makes your app stand out.
          </p>
          <a href="/" className="text-blue-600 font-semibold hover:underline flex items-center">
            Business Analysis services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* 3rd Party Integrations */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">3rd Party Integrations</h2>
          <p className="text-gray-700 mb-6">
            We seamlessly connect your app to payment gateways, social media, cloud services and more. Our integration expertise ensures smooth data flow and functionality across all platforms.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* UI/UX Design */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">UI/UX Design</h2>
          <p className="text-gray-700 mb-6">
            Our design team combines in-depth user research, wireframes, and interactive prototypes to create intuitive, visually stunning interfaces that embody your brand. We focus on accessibility, smooth navigation, and performance.
          </p>
          <a href="/" className="text-blue-600 font-semibold hover:underline flex items-center">
            UX/UI Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Quality Assurance */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quality Assurance (QA)</h2>
          <p className="text-gray-700 mb-6">
            Our QA team rigorously tests across 50+ devices and platforms, covering functionality, performance, and security. We ensure your app delivers flawless performance in all scenarios.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Development */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Development</h2>
          <p className="text-gray-700 mb-6">
            We build native iOS and Android apps or cross-platform solutions using React Native and Flutter, ensuring fast, secure, and scalable performance. Our agile process adapts to your evolving needs.
          </p>
          <a href="/" className="text-blue-600 font-semibold hover:underline flex items-center">
            Backend development services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Deployment & Support */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Deployment & Support</h2>
          <p className="text-gray-700 mb-6">
            We manage App Store and Google Play submissions, navigating strict guidelines for a smooth rollout. Post-launch our team provides ongoing support and updates to keep your app performing at its best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileAppServices;