import React, { useState } from 'react'

const servicesData = [
  {
    title: 'Web Development',
    description:
      'Our web development services deliver fast, secure, and user-friendly websites and applications. We develop web projects that enable businesses to meet user expectations, drive growth, and stay competitive in an ever-changing marketplace.',
    slug: 'web-development',
    buttonText: 'Explore Web Development',
  },
  {
    title: 'Mobile App Development',
    description:
      'We build high-performance cross-platform and native mobile apps tailored to your business needs. Our apps deliver seamless user experiences and ensure long-term scalability.',
    slug: 'mobile-app',
    buttonText: 'See Mobile Solutions',
  },
  {
    title: 'POS Software',
    description:
      'Custom POS solutions that streamline your retail operations, manage inventory, and improve checkout experiences. Designed for both small shops and large stores.',
    slug: 'pos-software',
    buttonText: 'View POS Demo',
  },
  {
    title: 'Graphic Design',
    description:
      'Creative visual design services including branding, UI design, and marketing graphics to bring your business identity to life.',
    slug: 'graphic-design',
    buttonText: 'View Design Portfolio',
  },
]

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className=" bg-gradient-to-br from-[#9da4cf] to-[#0d1a40] text-white py-20 px-6 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-blue-500">Services</span> we provide
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16">
          We provide exceptional services with a strong focus on delivering business value —
          not just software. Our team helps businesses with innovative, scalable, and efficient solutions.
        </p>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Tabs */}
          <div className="md:w-1/3 space-y-4">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`cursor-pointer px-6 py-4 rounded-md border border-blue-700 hover:bg-blue-600 transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-transparent text-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {service.title}
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="md:w-2/3 bg-[#0d1a40] p-8 rounded-xl shadow-xl border border-blue-800">
            <h3 className="text-3xl font-bold mb-4">{servicesData[activeIndex].title}</h3>
            <p className="text-gray-300 mb-8">{servicesData[activeIndex].description}</p>
            <a
              href={`/${servicesData[activeIndex].slug}`}
              className="inline-block border border-pink-500 text-pink-500 px-6 py-3 rounded-md hover:bg-pink-500 hover:text-white transition duration-300"
            >
              {servicesData[activeIndex].buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
