const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");   // for file upload
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Multer for File Upload (Max 5 files, 20MB each)
const upload = multer({
  limits: { fileSize: 20 * 1024 * 1024 }  // 20MB
});

// Email Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,  // your gmail
    pass: process.env.EMAIL_PASS,  // app password
  },
});

/* -----------------------------------------------------
   📌 1) Contact Us Inquiry Form API (Already Provided)
------------------------------------------------------- */
app.post("/sendMail", async (req, res) => {
  const {
    company,
    firstName,
    lastName,
    designation,
    email,
    phone,
    address,
    state,
    requirement,
  } = req.body;

  try {
    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Inquiry from ${firstName} ${lastName}`,
      text: `
Company: ${company}
Name: ${firstName} ${lastName}
Designation: ${designation}
Email: ${email}
Phone: ${phone}
Address: ${address}
State: ${state}

Requirement:
${requirement}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});


/* -----------------------------------------------------
   📌 2) Complaint Form Backend API (NEW)
------------------------------------------------------- */
app.post("/sendComplaint", upload.array("files", 5), async (req, res) => {
  try {
    const {
      customerName,
      contactNo,
      contactPerson,
      operationalDuration,
      siteAddress,
      installationDate,
      oemType,
      productDescription,
      complaint,
      email,
      altEmail,
      serialNo,
      state,
      pinCode,
      quantity,
      subject,
    } = req.body;

    // Convert uploaded files into email attachments
    const attachments = (req.files || []).map((file) => ({
      filename: file.originalname,
      content: file.buffer,
    }));

    // Email that YOU will receive
    const mailOptions = {
      from: email || process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Complaint Received - ${subject}`,
      text: `
       Customer Complaint Details

       Customer Name: ${customerName}
       Contact No:</strong> ${contactNo}
       Contact Person: ${contactPerson}
       Operational Duration: ${operationalDuration}
       Site Address: ${siteAddress}
       Date of Installation: ${installationDate}
       OEM/Dealer/End User: ${oemType}
       Product Description: ${productDescription}
       Complaint: ${complaint}
       Email: ${email}
       Alternative Email: ${altEmail}
       Serial No: ${serialNo}
       State: ${state}
       Pin Code: ${pinCode}
       Quantity: ${quantity}
      `,
      attachments,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Complaint submitted successfully" });
  } catch (error) {
    console.log("Complaint Form Error:", error);
    res.json({ success: false, message: "Error submitting complaint" });
  }
});


/* -----------------------------------------------------
   📌 Start Server
------------------------------------------------------- */
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
