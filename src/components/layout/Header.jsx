import React from 'react';
import ThemeToggle from '../common/ThemeToggle';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          Newsletter Subscription
        </h1>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;