import React from 'react';

const Button = ({ children, type = 'button', disabled = false, onClick, className = '' }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`w-full sm:w-auto px-4 py-2 bg-primary-light dark:bg-primary-dark text-white font-medium rounded-md shadow-sm 
        hover:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
        transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;