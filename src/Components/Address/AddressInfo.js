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
      <label id='1'>
        Address Line 1:
        <input
          type="text"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          className={errors.address1 ? 'error' : ''}
        />
        {errors.address1 && <div className="error-message">{errors.address1}</div>}
      </label>
      <br />
      <label id='2'>
        Address Line 2:
        <input
          type="text"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          className={errors.address2 ? 'error' : ''}
        />
        {errors.address2 && <div className="error-message">{errors.address2}</div>}
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={errors.city ? 'error' : ''}
        />
        {errors.city && <div className="error-message">{errors.city}</div>}
      </label>
      <br />
      <label>
        State:
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={errors.state ? 'error' : ''}
        />
        {errors.state && <div className="error-message">{errors.state}</div>}
      </label>
      <br />
      <label>
        Zip Code:
        <input
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className={errors.zip ? 'error' : ''}
        />
        {errors.zip && <div className="error-message">{errors.zip}</div>}
      </label>
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