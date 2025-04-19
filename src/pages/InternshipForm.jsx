import React from "react";
import "./InternshipForm.css";

function InternshipForm() {
  return (
    <div className="form-container">
      <h1>UG/PG Internship Portal</h1>
      <form className="internship-form">
        <div className="form-row">
          <input type="text" placeholder="Roll No" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Name" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Branch" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Semester" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Section" />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Mobile" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Role" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Organization" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="HR Email" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="HR Mobile" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Duration" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Pay" />
        </div>
        <div className="form-row">
          <label htmlFor="">Start-Date</label>
          <input type="date" />
        </div>
        <label htmlFor="">End-Date</label>
        <div className="form-row">
          <input type="date" />
        </div>
        <div className="form-row">
          <label>Upload Offer Letter:
            <input type="file" accept=".pdf" />
          </label>
        </div>
        <div className="form-row">
          <label>Upload Aprroval Letter:
            <input type="file" accept=".pdf" />
          </label>
        </div>
        <div className="form-row">
          <label>Upload NOC:
            <input type="file" accept=".pdf" />
          </label>
        </div>
        <div className="submit-container">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default InternshipForm;
