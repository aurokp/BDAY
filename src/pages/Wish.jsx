import React, { useState, useRef, useEffect } from 'react';
import cakeImg from '../assets/cake1.png';
import './Wish.css';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

const Wish = () => {
  const [candleLit, setCandleLit] = useState(true);
  const [showCake, setShowCake] = useState(true);
  const [promptDisabled, setPromptDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);
  // Removed wish input states
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const handleBlowCandle = () => {
    setCandleLit(false);
    setPromptDisabled(true);
    setShowBalloons(true);
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setShowCake(false);
      setShowMessage(true);
    }, 2000);
  };

  // Removed input handlers

  // Fade transition state
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    setFadeClass('fade-in');
    return () => {
      setFadeClass('');
    };
  }, []);

  return (
    <div className={`wish-container ${fadeClass}`} style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #ffe0f7 0%, #fff6e0 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {showBalloons && (
        <div className="balloon-area">
          <span className="balloon balloon1">🎈</span>
          <span className="balloon balloon2">🎈</span>
          <span className="balloon balloon3">🎈</span>
          <span className="balloon balloon4">🎈</span>
          <span className="balloon balloon5">🎈</span>
          <span className="balloon balloon6">🎈</span>
        </div>
      )}

      <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae3e2.mp3" loop autoPlay />
      {showCake && (
        <>
          <div className="cake-responsive-container">
            <img
              src={cakeImg}
              alt="Birthday Cake"
              className="cake-responsive-img"
            />
            {/* Candle Body always visible */}
            <div className="candle-body-responsive" style={{
              position: 'absolute',
              left: '50%',
              top: '48px',
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
              zIndex: 2,
            }}>
              <svg className="candle-svg" width="18" height="54" viewBox="0 0 10 30">
                <rect x="0" y="0" width="10" height="30" rx="5" fill="#ff0000" />
              </svg>
            </div>
            {/* Candle Flame only when lit */}
            {candleLit && (
              <div className="candle-flame-responsive" style={{
                position: 'absolute',
                left: '50%',
                top: '18px',
                transform: 'translateX(-50%)',
                pointerEvents: 'none',
                zIndex: 3,
              }}>
                <svg className="flame-svg" width="32" height="48" viewBox="0 0 24 32">
                  <ellipse cx="12" cy="16" rx="7" ry="12" fill="#ffeb3b" style={{ opacity: 1, filter: 'drop-shadow(0 0 16px #ffeb3b)' }} />
                </svg>
              </div>
            )}
          </div>
          {candleLit && (
            <button
              onClick={handleBlowCandle}
              disabled={promptDisabled}
              style={{
                fontSize: '1.3rem',
                padding: '0.7rem 2.2rem',
                borderRadius: '1.2rem',
                background: 'linear-gradient(90deg, #ffb347 0%, #ff69b4 100%)',
                color: 'white',
                border: 'none',
                cursor: promptDisabled ? 'not-allowed' : 'pointer',
                boxShadow: '0 2px 8px #ffb34788',
                fontWeight: 'bold',
                marginBottom: '1.2rem',
                transition: 'background 0.3s, transform 0.2s',
                opacity: promptDisabled ? 0.6 : 1,
              }}
              className="blow-candle-btn"
            >
              Blow the candle 🕯️
            </button>
          )}
        </>
      )}
      {showMessage && (
        <div className="wish-message-responsive">
          <>
            <span
              className="animated-birthday fade-in-text"
              style={{
                color: 'hotpink',
                fontWeight: 'bold',
                fontSize: '2rem',
                opacity: 1,
                transition: 'opacity 1.2s ease-in',
                display: 'inline-block',
              }}
            >
              Happy Birthday Srabani 🥳❤️🎊
            </span>
            <br />
            <span
              className="animated-special fade-in-text"
              style={{
                color: 'hotpink',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                opacity: 1,
                transition: 'opacity 1.2s ease-in',
                display: 'inline-block',
              }}
            >
            Hope your special day is filled with lots of joy,laughs and good vibes😊
            </span>
            <div style={{ fontSize: '4rem', marginTop: '1.5rem' }}>🎂</div>
            <button
              onClick={() => navigate('/surprise')}
              style={{
                marginTop: '2.5rem',
                fontSize: '1.5rem',
                padding: '0.8rem 2.5rem',
                borderRadius: '1.5rem',
                background: 'linear-gradient(90deg, #ffb347 0%, #ff69b4 100%)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 2px 8px #ffb34788',
                fontWeight: 'bold',
                transition: 'background 0.3s, transform 0.2s',
              }}
              className="message-btn"
            >
                AK's message
            </button>
          </>
        </div>
      )}
    </div>
  );
};

export default Wish;
