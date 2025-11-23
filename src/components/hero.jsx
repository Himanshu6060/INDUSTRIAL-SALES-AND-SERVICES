import React, { useEffect, useState } from "react";
import "./hero.css";

function Hero() {
  // List of background images
  const images = [
    "https://www.workplacead.com/wp-content/uploads/2023/03/Exterior-1-Day-scaled.jpg",
    "https://proconnect.co.in/wp-content/uploads/2020/01/inplant-logistics-1.jpg",
    "https://info.interroll.com/hubfs/AI%20warehouse%20automation%20blog%20image.webp",
    "https://static.vecteezy.com/system/resources/previews/027/644/876/large_2x/large-automated-warehouse-logistics-center-for-the-delivery-and-storage-of-goods-ai-generated-free-photo.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="hero-content">
        <h4>Two Leading Italian Companies, <br />
        one special alliance for the Indian market.</h4>
        <a href="#products"><button className="hero-btn">Discover the Product</button></a>
      </div>
    </section>
  );
}

export default Hero;
