import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubscriberListPage from './pages/SubscriberListPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './index.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subscribers" element={<SubscriberListPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;