import React from 'react'

const services = [
  {
    title: "Web Design & Development",
    description: "We create stunning and responsive websites that grow your business online.",
    icon: "💻",
  },
  {
    title: "App Development",
    description: "High-performance mobile and web apps tailored for your business needs.",
    icon: "📱",
  },
  {
    title: "POS Software",
    description: "Smart point-of-sale systems for shops, restaurants, and retailers.",
    icon: "🧾",
  },
  {
    title: "Graphic Design",
    description: "Creative visuals, branding, and graphics that make you stand out.",
    icon: "🎨",
  },
  {
    title: "Digital Marketing",
    description: "Grow your brand online through SEO, social media & paid campaigns.",
    icon: "📢",
  },
  {
    title: "Custom Software",
    description: "Build powerful tools to automate your unique business operations.",
    icon: "🧠",
  },
]

const Services = () => {
  return (
    <div className="py-24 px-6 md:px-0 bg-gradient-to-b from-blue-100 to-blue-200 max-w-7xl mx-auto ">
      <div className=" text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-800">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 m-5">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center h-80 w-full text-center transition duration-300 hover:shadow-2xl"
            >
              <div className="text-6xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
