import React from "react";
import "./about.css";
import aboutImg from "../assets/about-industrial.jpg";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/why-choose");
  };

  return (
    <section id="about" className="about-section">
      
      <div className="about-header">
        <h2>About Us</h2>
        <p>Reliable • Trusted • Industrial Solutions</p>
      </div>

      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="Industrial Sales" />
        </div>

        <div className="about-content">
          <h3>Industrial Sales</h3>
          <p>
            Industrial Sales is a leading distributor of industrial equipment, 
            power transmission products, motors, gearboxes, and engineering 
            solutions. Our team provides reliable service, quality assurance, 
            and long-term support for industries in various sectors.
          </p>

          <p>
            We deliver tailored solutions through trusted manufacturers, backed 
            by strong customer relationships and efficient service support.
          </p>

          <button className="about-btn" onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
      </div>

    </section>
  );
}

export default About;
