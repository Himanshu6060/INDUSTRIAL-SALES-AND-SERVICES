import React from "react";
import { useEffect } from "react";
import "./about.css";
import aboutImg from "../assets/about-industrial.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/why-choose");
  };
   useEffect(() => {
    AOS.init({duration: 1500})
     
   }, []);
   

  return (
    <section id="about" className="about-section">
      
      <div className="about-header">
        <h2 data-aos="fade-left">About Us</h2>
        <p data-aos="fade-left">Reliable • Trusted • Industrial Solutions</p>
      </div>

      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="Industrial Sales" data-aos="fade-right" />
        </div>

        <div className="about-content">
          <h3 data-aos="fade-left">Industrial Sales</h3>
          <p data-aos="fade-left">
            Industrial Sales is a leading distributor of industrial equipment, 
            power transmission products, motors, gearboxes, and engineering 
            solutions. Our team provides reliable service, quality assurance, 
            and long-term support for industries in various sectors.
          </p>

          <p data-aos="fade-left">
            We deliver tailored solutions through trusted manufacturers, backed 
            by strong customer relationships and efficient service support.
          </p>

          <button className="about-btn" onClick={handleLearnMore} data-aos="fade-left">
            Learn More
          </button>
        </div>
      </div>

    </section>
  );
}

export default About;
