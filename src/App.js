import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Footer from "./components/footer.jsx";
import LiveLocationMap from "./components/liveLocationMap.jsx";
import Products from "./components/product.jsx";
import About from "./components/about.jsx";
import WhyChoose from "./components/WhyChoose.jsx";
import Services from "./components/services.jsx"
import ContactUs from "./components/contactUs.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default route shows all main components except Contact Us */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About/>
              <Products />
              <Services/>
              <LiveLocationMap/>
              {/* <Footer /> */}
            </>
          }
        />
        
        {/* Route for Contact Us only */}
          {/* About Section */}
    <Route path="/about" element={<About />} />
    <Route path="/why-choose" element={<WhyChoose />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;