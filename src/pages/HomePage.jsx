import React from 'react';
import SubscriberForm from '../components/subscriber/SubscriberForm';

const HomePage = () => {
  return (
    <div className="py-8">
      <main className="container max-w-3xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-center mb-6">Subscribe to Our Newsletter</h2>
        <SubscriberForm />
      </main>
    </div>
  );
};

export default HomePage;