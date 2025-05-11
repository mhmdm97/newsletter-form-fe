import React from 'react';

const FormField = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  required = false, 
  error = null 
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`
          block w-full rounded-md shadow-sm 
          border-gray-300 dark:border-gray-600 
          bg-white dark:bg-gray-700 
          text-gray-900 dark:text-white
          focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-400
          ${error ? 'border-red-300 dark:border-red-700' : ''}
        `}
      />
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
};

export default FormField;