// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false) // for mobile submenu

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  const serviceLinks = [
    { name: "Mobile Apps", path: "/services/mobile-apps" },
    { name: "Website", path: "/services/website" },
    { name: "Graphics Design", path: "/services/graphics-design" },
    { name: "UI/UX Design", path: "/services/ui-ux" },
    { name: "POS Software", path: "/services/pos" },
  ]

  return (
    <nav className="bg-slate-300 shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          DEV-SOFT
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) =>
            link.name === "Services" ? (
              <div key={link.name} className="relative group">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-gray-700 font-medium hover:text-blue-600 transition ${
                      isActive ? "text-blue-600" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>

                {/* Smooth Submenu */}
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 ease-in-out">
                  {serviceLinks.map((service) => (
                    <NavLink
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
                    >
                      {service.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 font-medium hover:text-blue-600 transition ${
                    isActive ? "text-blue-600" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          {navLinks.map((link) =>
            link.name === "Services" ? (
              <div key={link.name}>
                <button
                  className="w-full text-left py-2 text-gray-700 font-medium hover:text-blue-600"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  {link.name}
                </button>
                {isServicesOpen && (
                  <div className="ml-4">
                    {serviceLinks.map((service) => (
                      <NavLink
                        key={service.name}
                        to={service.path}
                        className="block py-2 text-gray-600 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
