import React from 'react'

const Hero = () => {
  return (
    <section className=" bg-gradient-to-b from-white to-blue-400 h-[600px] py-24 max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Your reliable partner in{' '}
            <span className="text-blue-600">digital</span> transformation
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-700 leading-relaxed">
            Empowering businesses with intelligent technologies: <br className="hidden md:block" />
            custom software, IoT solutions, AI-powered apps, and beyond.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300">
              Book Consultation
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full text-lg hover:bg-blue-600 hover:text-white transition duration-300">
              Our Services
            </button>
          </div>
        </div>

        {/* Optional Right Side Image (Future Idea) */}
        {/* <div className="flex-1 hidden md:block">
          <img src="/path-to-illustration.png" alt="Digital Transformation" />
        </div> */}
      </div>
    </section>
  )
}

export default Hero
