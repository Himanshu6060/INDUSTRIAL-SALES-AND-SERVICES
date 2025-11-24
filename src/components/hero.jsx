import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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

   useEffect(()=>{
      AOS.init({duration: 1000});
   },[]);
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="hero-content" > 
        <h4 data-aos="fade-up">Two Leading Italian Companies, <br />
        one special alliance for the Indian market.</h4>
        <a href="#products"><button className="hero-btn" data-aos="fade-up" data-aos-duration="3000">Discover the Product</button></a>
      </div>
    </section>
  );
}

export default Hero;
