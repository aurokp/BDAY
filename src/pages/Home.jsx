import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [fadeClass, setFadeClass] = useState('fade-in');
  useEffect(() => {
    setFadeClass('fade-in');
    return () => setFadeClass('');
  }, []);
  const handleStart = () => {
    if (window.confirm('Are you ready to see your surprise?')) {
      navigate('/wish');
    }
  };

  return (
    <div className={`home-container ${fadeClass}`}>
      <h1 className="greeting">Hey [Name]!</h1>
      <h2 className="subtitle">Ready for the surprise?</h2>
      <button className="start-btn" onClick={handleStart}>
        Start
      </button>
    </div>
  );
};

export default Home;
