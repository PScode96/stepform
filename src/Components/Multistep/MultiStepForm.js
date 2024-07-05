import React, { useState, useEffect } from 'react';
import PersonalInfo from '../personal/PersonalInfo';
import AddressInfo from '../Address/AddressInfo';
import Confirmation from '../Confirmation/Confirmation';

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo formData={formData} setFormData={setFormData} onNext={handleNext} />;
      case 2:
        return <AddressInfo formData={formData} setFormData={setFormData} onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Confirmation formData={formData} setFormData={setFormData} setCurrentStep = {setCurrentStep}  onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
};

export default MultiStepForm;