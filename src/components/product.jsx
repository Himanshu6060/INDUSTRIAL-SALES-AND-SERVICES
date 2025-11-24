import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./product.css";

const products = [
  {
    id: 1,
    title: "Smart Gear Motor",
    description:
      "The “R” Series is made up of a new generation of asynchronous standard motors (SMR) or brake motors (BAR or BMR), 4 and 6 poles and IEC frame sizes from 56 up to 132.Available nominal torques range is from 0.4Nm to 37Nm on 4 pole motors while it’s from 3.88Nm to 54.71Nm on 6 pole motors. R series motor is designed to be controlled by inverter only. The reference frequency at a voltage of 400V is 120Hz instead of 400V 50Hz",
    image:
      "https://www.mgmrestop.com/wp-content/uploads/2024/10/Motore-Serie-R-1980x1320.jpg",
  },
  {
    id: 2,
    title: "Compact Speed Reducer",
    description:
      "BA electric brake motors are supplied as standard as BAH series starting from the frame size 225 up to 315 mm and on request starting from the frame size 80 up to 200. BAH series brake motors are proposed in the BAHX version for continuous duty with efficiency class IE2 / IE3 (compliant with EU regulation 2019/1781), alternatively they can be supplied in the BAH ‘Enhanced Power’ version only for intermittent service (S3 60%).",
    image:
      "https://www.mgmrestop.com/wp-content/uploads/2024/10/Motore-Serie-BAH-1536x1024.jpg",
  },
  {
    id: 3,
    title: "Industrial Drive Unit",
    description:
      "BA electric brake motors are supplied as standard as BAH series starting from frame size...",
    image:
      "https://www.mgmrestop.com/wp-content/uploads/2024/10/Motore-serie-BMBM-1980x1322.jpg",
  },
  {
    id: 4,
    title: "Precision Motor Coupling",
    description:
      "BMBM series main feature is a very high reliability in lifting applications...",
    image:
      "https://www.mgmrestop.com/wp-content/uploads/2024/10/Motore-serie-SMX-1536x1024.jpg",
  },
];

const Products = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Close Popup
  const closePopup = () => {
    setSelectedProduct(null);
  };

  useEffect(()=>{
    AOS.init({duration: 1500})
  },[])

  return (
    <section id="products" className="products-section">
      <h2 className="products-heading" data-aos="zoom-out">Products</h2>
      <p className="products-intro" data-aos="zoom-out">
        Our in-depth knowledge of the needs of machine builders has enabled us
        to offer the Indian market a wide range of motors, gearmotors and
        gearboxes for all industries.
      </p>

      {/* Product Cards */}
      <div className="products-container">
        {products.map((product) => (
          <div data-aos="zoom-out" className="product-card" key={product.id}>
            <div className="product-top">
              <img
                src={product.image}
                alt={product.title}
                className="product-main-img"
              />

              <div className="product-text-block">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">
                  {product.description.slice(0, 200)}...
                </p>
              </div>

              <button
                className="product-arrow"
                onClick={() => setSelectedProduct(product)}
              >
                ➜
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {selectedProduct && (
        <div className="product-popup-overlay" onClick={closePopup}>
          <div className="product-popup" onClick={(e) => e.stopPropagation()}>
            <span className="close-popup" onClick={closePopup}>
              &times;
            </span>

            <div className="popup-content">
              <div className="popup-left">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="popup-left-image"
                />
              </div>

              <div className="popup-right">
                <h3 className="popup-title">{selectedProduct.title}</h3>
                <p className="popup-description">
                  {selectedProduct.description}
                </p>

                <button className="popup-book-btn" onClick={()=> navigate("/contact")}>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
