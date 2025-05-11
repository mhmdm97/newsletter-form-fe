export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhoneNumber = (phoneNumber) => {
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(String(phoneNumber));
};

export const validateRequired = (value) => {
  return value && value.trim() !== '';
};

export const validateForm = (formData) => {
  const errors = {};
  
  if (!validateRequired(formData.name)) {
    errors.name = 'Name is required';
  }
  
  if (!validateEmail(formData.email)) {
    errors.email = 'Email is invalid';
  }
  
  if (!validatePhoneNumber(formData.phoneNumber)) {
    errors.phoneNumber = 'Phone number is invalid';
  }
  
  if (!Array.isArray(formData.interestIds) || formData.interestIds.length === 0) {
    errors.interestIds = 'At least one interest must be selected';
  }
  
  if (!Array.isArray(formData.communicationPreferencesIds) || formData.communicationPreferencesIds.length === 0) {
    errors.communicationPreferencesIds = 'At least one communication preference must be selected';
  }
  
  return errors;
};