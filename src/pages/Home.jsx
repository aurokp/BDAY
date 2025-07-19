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
    <div className={`home-container ${fadeClass}`} style={{
      background: 'linear-gradient(135deg, #ffe0f7 0%, #fff6e0 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative Confetti SVG */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
          <circle cx="10%" cy="15%" r="18" fill="#ffb6d5" opacity="0.18" />
          <circle cx="90%" cy="20%" r="12" fill="#ffe0f7" opacity="0.18" />
          <circle cx="20%" cy="80%" r="16" fill="#ffb6d5" opacity="0.13" />
          <circle cx="80%" cy="90%" r="10" fill="#ffe0f7" opacity="0.13" />
          <circle cx="50%" cy="50%" r="30" fill="#ffb6d5" opacity="0.09" />
        </svg>
      </div>
      <div className="emoji-animations" style={{ zIndex: 1 }}>
        <span className="emoji cake" role="img" aria-label="cake">🎂</span>
        <span className="emoji balloon" role="img" aria-label="balloon">🎈</span>
        <span className="emoji gift" role="img" aria-label="gift">🎁</span>
      </div>
      <h1 className="greeting" style={{ zIndex: 1 }}>Hey SP!</h1>
      <h2 className="subtitle" style={{ zIndex: 1 }}>Ready for the surprise?</h2>
      <button className="start-btn" style={{ zIndex: 1 }} onClick={handleStart}>
        Start
      </button>
    </div>
  );
};

export default Home;
