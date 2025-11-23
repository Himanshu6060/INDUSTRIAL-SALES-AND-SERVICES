import React, { useState } from "react";
import "./services.css";

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    contactNo: "",
    contactPerson: "",
    operationalDuration: "",
    siteAddress: "",
    installationDate: "",
    oemType: "",
    productDescription: "",
    complaint: "",
    email: "",
    altEmail: "",
    serialNo: "",
    state: "",
    pinCode: "",
    quantity: "",
    subject: "",
    files: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      alert("You can upload a maximum of 5 files.");
      return;
    }
    const validFiles = files.filter((file) => file.size <= 20 * 1024 * 1024);
    if (validFiles.length !== files.length) {
      alert("Each file must be 20MB or smaller.");
    }
    setFormData({ ...formData, files: validFiles });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formDataToSend = new FormData();
  Object.keys(formData).forEach((key) => {
    if (key === "files") {
      formData.files.forEach((file) => {
        formDataToSend.append("files", file);
      });
    } else {
      formDataToSend.append(key, formData[key]);
    }
  });

  const response = await fetch("http://localhost:5000/sendComplaint", {
    method: "POST",
    body: formDataToSend,
  });

  const result = await response.json();

  if (result.message) {
    alert("✅ Complaint submitted successfully!");
  } else {
    alert("❌ Something went wrong while submitting.");
  }

  resetForm();
};


  const resetForm = () => {
    setFormData({
      customerName: "",
      contactNo: "",
      contactPerson: "",
      operationalDuration: "",
      siteAddress: "",
      installationDate: "",
      oemType: "",
      productDescription: "",
      complaint: "",
      email: "",
      altEmail: "",
      serialNo: "",
      state: "",
      pinCode: "",
      quantity: "",
      subject: "",
      files: [],
    });
  };

  return (
    <section id="services" className="complaint-section">
      <h2 className="complaint-heading">Customer Complaint Form</h2>
      <p className="complaint-intro">
        Please fill in the form below to submit your complaint or service
        request. Our support team will contact you soon.
      </p>

      <form className="complaint-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Customer Name</label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Contact No</label>
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Contact Person Name</label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Operational Duration</label>
            <input
              type="text"
              name="operationalDuration"
              value={formData.operationalDuration}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Site Address</label>
            <textarea
              name="siteAddress"
              value={formData.siteAddress}
              onChange={handleChange}
              rows="2"
            ></textarea>
          </div>

          <div className="form-group">
            <label>Date of Installation</label>
            <input
              type="date"
              name="installationDate"
              value={formData.installationDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>OEM / Dealer / End User</label>
            <input
              type="text"
              name="oemType"
              value={formData.oemType}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Product Description</label>
            <textarea
              name="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
              rows="2"
            ></textarea>
          </div>

          <div className="form-group full-width">
            <label>Complaint</label>
            <textarea
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              rows="3"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Alternative Email</label>
            <input
              type="email"
              name="altEmail"
              value={formData.altEmail}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Serial No</label>
            <input
              type="text"
              name="serialNo"
              value={formData.serialNo}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Pin Code</label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Attach Files (Max 5, 20MB each)</label>
            <input
              type="file"
              multiple
              name="files"
              onChange={handleFileChange}
            />
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
            />
          </div>

          <div className="form-group full-width">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="button-group">
          <button type="submit" className="submit-btn">
            Submit Data
          </button>
          <button
            type="button"
            className="reset-btn"
            onClick={resetForm}
          >
            Reset Data
          </button>
        </div>
      </form>
    </section>
  );
};

export default ComplaintForm;
