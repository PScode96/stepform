import React, { useState } from 'react';
import './PersonalInfo.css'

const PersonalInfo = ({ onNext, formData, setFormData }) => {
  const [name, setName] = useState(formData.name || '');
  const [email, setEmail] = useState(formData.email || '');
  const [phone, setPhone] = useState(formData.phone || '');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorObj = {};

    if (!name) errorObj.name = 'Name is required';
    if (!email) errorObj.email = 'Email is required';
    if (!phone) errorObj.phone = 'Phone is required';

    if (Object.keys(errorObj).length > 0) {
      setErrors(errorObj);
    } else {
      setFormData({ ...formData, name, email, phone });
      onNext();
    }
  };

  return (
    <div className="personal-info">
    <form onSubmit={handleSubmit}>
      <h2>Step 1 : Personal Information</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <div className="error-message">{errors.name}</div>}
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={errors.phone ? 'error' : ''}
        />
        {errors.phone && <div className="error-message">{errors.phone}</div>}
      </label>
      <br />
      <button type="submit">Next</button>
    </form>
    </div>
  );
};

export default PersonalInfo;