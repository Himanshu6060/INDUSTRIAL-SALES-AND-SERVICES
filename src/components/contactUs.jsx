import React, { useState } from "react";
import "./contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    company: "",
    firstName: "",
    lastName: "",
    designation: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    requirement: "",
  });

  const [loading, setLoading] = useState(false);

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit Handler (Connected to Backend)
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        alert("✅ Your inquiry was sent successfully!");
        handleReset();
      } else {
        alert("❌ Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      console.log(error);
      alert("⚠ Server not responding. Check backend.");
    }

    setLoading(false);
  };

  // Reset Handler
  const handleReset = () => {
    setFormData({
      company: "",
      firstName: "",
      lastName: "",
      designation: "",
      email: "",
      phone: "",
      address: "",
      state: "",
      requirement: "",
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p className="company-name">ABC Technologies Pvt. Ltd.</p>
          <p>📍 Address: 123 Tech Park Road, New Delhi, India</p>
          <p>📧 Email: contact@abctech.com</p>
          <p>📞 Phone: +91 98765 43210</p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="inquiry-form">
          <h3>Inquiry Form</h3>

          <form onSubmit={handleSubmit}>
            
            <div className="form-row">
              <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name*" value={formData.lastName} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            </div>

            <div className="form-row">
              <input type="text" name="address" placeholder="Company Address" value={formData.address} onChange={handleChange} />
              <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
            </div>

            <div className="form-row full-width">
              <textarea name="requirement" placeholder="Requirement" rows="2" value={formData.requirement} onChange={handleChange}></textarea>
            </div>

            <div className="button-group">
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
              </button>

              <button type="button" className="reset-btn" onClick={handleReset}>
                Reset
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
