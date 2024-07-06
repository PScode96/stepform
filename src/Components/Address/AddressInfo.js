import React, { useState } from 'react';
import './AddressInfo.css'

const AddressInfo = ({ onNext, onBack, formData, setFormData }) => {
  const [address1, setAddress1] = useState(formData.address1 || '');
  const [address2, setAddress2] = useState(formData.address2 || '');
  const [city, setCity] = useState(formData.city || '');
  const [state, setState] = useState(formData.state || '');
  const [zip, setZip] = useState(formData.zip || '');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorObj = {};

    if (!address1) errorObj.address1 = 'Address Line 1 is required';
    if (!city) errorObj.city = 'City is required';
    if (!state) errorObj.state = 'State is required';
    if (!zip) errorObj.zip = 'Zip Code is required';

    if (Object.keys(errorObj).length > 0) {
      setErrors(errorObj);
    } else {
      setFormData({ ...formData, address1, address2, city, state, zip });
      onNext();
    }
  };

  return (
    <div className="address-info">
    <form onSubmit={handleSubmit}>
      <h2>Step 2 : Address Information</h2>
      <label>AddressLine 1:</label>
        <input
          type="text"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          className={errors.address1 ? 'error' : ''}
        />
        {errors.address1 && <div className="error-message">{errors.address1}</div>}
      
      <br />
      <label>Address Line 2:</label>
        <input
          type="text"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          className={errors.address2 ? 'error' : ''}
        />
        {errors.address2 && <div className="error-message">{errors.address2}</div>}
    
      <br />
      <label> City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={errors.city ? 'error' : ''}
        />
        {errors.city && <div className="error-message">{errors.city}</div>}
      <br />
      <label>State:</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={errors.state ? 'error' : ''}
        />
        {errors.state && <div className="error-message">{errors.state}</div>}
  
      <br />
      <label>Zip Code:</label>
        <input
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className={errors.zip ? 'error' : ''}
        />
        {errors.zip && <div className="error-message">{errors.zip}</div>}
      <br />
      <div className='btn'>
      <button type="button" onClick={onBack}>Back</button>
      <button type="submit">Next</button>
      </div>
    </form>
    </div>
  );
};

export default AddressInfo;