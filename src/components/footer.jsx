import React from "react";
import "./footer.css";
import logo from "../assets/logo.png"; // put your logo at src/assets/logo.png
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(()=>{
    AOS.init({duration:"1500"})
  },[])
  return (
    <>
      <footer className="footer">
        <div className="footer-section company-info">
        
          <img src={logo} alt="Company Logo" className="footer-logo" data-aos="zoom-out" />
          
          <h3 data-aos="fade-up">Industrial </h3>
          <p data-aos="fade-up"><strong>Sales & Service</strong></p>
          <p data-aos="fade-up">  001,Bld.06,Padmavatiestate near Bhav recidency, Datt mandil,Before   
      Kasheli  toll naka<br/>
            Bhivandi, Maharastra, 421302, India
          </p>
        </div>

        <div className="footer-section contact-details">
          <h4 data-aos="fade-up">CONTACT DETAILS</h4>
          <p data-aos="fade-up"><i className="fas fa-phone"></i> +91 9833158663</p>
          <p data-aos="fade-up"><i className="fas fa-envelope"></i>issindustrialsales@gmail.com</p>
        </div>

        <div className="footer-section sitemap" data-aos="fade-up">
          <h4>SITEMAP</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            {/* <li><a href="#company">Company</a></li> */}
            <li><a href="#services">Services</a></li>
            {/* <li><a href="#sales">Sales Network</a></li> */}
            {/* <li><a href="#news">News & Events</a></li> */}
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contacts">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section legal" data-aos="fade-up">
          <h4>LEGAL</h4>

          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#cookie">Cookie Policy</a></li>
          </ul>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/9833158663"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            Contact Us
          </a>
        </div>

      </footer>

      {/* Bottom credits bar */}
      <div className="footer-bottom-bar">
        credits Industrial Sales And Service @All rights reserved | Credit by Mediamorphosis
      </div>
    </>
  );
}

export default Footer;
