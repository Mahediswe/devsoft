import React from "react"
import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Mobile from "./pages/Mobile"
import Web from "./pages/Web"
import UXUI from "./pages/uxui"

const App = () => {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <div className="flex-1">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />

          {/* Service Sub Pages */}
          <Route path="/services/mobile-apps" element={<Mobile />} />
          <Route path="/services/website" element={<Web />} />
          <Route path="/services/ui-ux" element={<UXUI />} />

          {/* Future services will go here */}
          {/* <Route path="/services/graphics-design" element={<GraphicsDesign />} /> */}
          {/* <Route path="/services/pos" element={<POS />} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App
