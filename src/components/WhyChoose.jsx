import React from "react";
import "./whychoose.css";

function WhyChoose() {
  return (
    <section className="whychoose-section">
      <h2>Why Choose Industrial Sales?</h2>
      <p className="why-intro">
        We deliver trusted industrial products and services backed by 
        strong expertise, customer support, and on-time delivery.
      </p>

      <div className="why-grid">

        <div className="why-card">
          <h3>✔ Trusted Supplier</h3>
          <p>
            Years of industry experience supplying reliable, certified 
            industrial products to OEMs, dealers, and manufacturing units.
          </p>
        </div>

        <div className="why-card">
          <h3>✔ Superior Quality</h3>
          <p>
            All products are sourced from reputed manufacturers with strict 
            quality control and performance testing.
          </p>
        </div>

        <div className="why-card">
          <h3>✔ Customer Support</h3>
          <p>
            Our dedicated team ensures quick response, troubleshooting, 
            and post-sales assistance for all customers.
          </p>
        </div>

        <div className="why-card">
          <h3>✔ On-Time Delivery</h3>
          <p>
            Efficient supply chain and inventory system ensure fast delivery 
            of all industrial equipment and spare parts.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;
