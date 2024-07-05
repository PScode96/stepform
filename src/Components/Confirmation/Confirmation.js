import React from "react";
import './Confirmation.css'

const Confirmation = ({ formData, setFormData,setCurrentStep,onBack }) => {
  const handleSubmit = () => {
    alert(
      `You submitted the following information:\n\n${Object.entries(formData)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n")}`
    );

    setFormData({})
    localStorage.clear();
    setCurrentStep(1); 
  };

  return (

    <div className="confirmation-container">
       <h2>Step 3 : Review your details</h2>
      <ul>
        <li>Name: {formData.name}</li>
        <li>Email: {formData.email}</li>
        <li>Phone: {formData.phone}</li>
        <li>Address Line 1: {formData.address1}</li>
        <li>Address Line 2: {formData.address2}</li>
        <li>City: {formData.city}</li>
        <li>State: {formData.state}</li>
        <li>Zip Code: {formData.zip}</li>
      </ul>
      <button onClick={onBack}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
      
    </div>
  );
};

export default Confirmation;
