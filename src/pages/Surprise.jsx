import React, { useState, useEffect } from 'react';

const Surprise = () => {
  const [fadeClass, setFadeClass] = useState('fade-in');
  useEffect(() => {
    setFadeClass('fade-in');
    return () => setFadeClass('');
  }, []);
  return (
    <div
      className={fadeClass}
      style={{
        background: `linear-gradient(135deg, #ffe0f7 0%, #fff6e0 100%), url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')`,
        backgroundBlendMode: 'soft-light',
        color: 'hotpink',
        minHeight: '100vh',
        padding: '2.5rem 1.5rem',
        borderRadius: '2.5rem',
        boxShadow: '0 8px 32px rgba(255,105,180,0.18)',
        border: '4px solid #ffb6d5',
        maxWidth: '600px',
        margin: '2rem auto',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Pacifico', 'Segoe Script', 'Comic Sans MS', 'cursive', 'sans-serif'",
      }}
    >
      <h1 style={{
        textAlign: 'center',
        fontSize: '2.2rem',
        marginBottom: '1.2rem',
        color: '#ff69b4',
        textShadow: '0 2px 8px #fff0f7',
        letterSpacing: '2px',
      }}>
        🎂 Happy Birthday! 🎉
      </h1>
      <p style={{
        color: 'hotpink',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        background: 'rgba(255,255,255,0.7)',
        borderRadius: '1.2rem',
        padding: '1.2rem',
        boxShadow: '0 2px 12px #ffd6ec',
        whiteSpace: 'pre-line',
        textAlign: 'center',
        margin: 0,
      }}>
{`Happy birthday to you!,
to the poetic, sweet,
supportive, caring,
cool girl I know of.

Finally of my age now huh
Kemiti laguchi? mote kahibu hela 😂
Hope Ei barsa gata barsa thu bhi bahut bhala jau to paain

I wanna say thanks for being the most amazing 
and caring bestie of mine.

A day has hardly passed without us talking,
department re heu ki call re ya chat re. Aji v free hele
kahibu kathaheba 😂

Ama friendship eternity jain chalithau.
As we say BFF for lyf.

Au gote katha
Reels check Kariba bhulibuni hela😅

Meet you soon kayi saare baatein karenge.

Above all,
aaj tera din hai yaaar!
have an amazing birthday coz you truly deserve it.

Enjoy karna full on masti😎🤟

Love you yaar 😊❤️`}
      </p>
      {/* Decorative confetti or hearts */}
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
          <circle cx="10%" cy="10%" r="18" fill="#ffb6d5" opacity="0.18" />
          <circle cx="90%" cy="20%" r="12" fill="#ffe0f7" opacity="0.18" />
          <circle cx="20%" cy="80%" r="16" fill="#ffb6d5" opacity="0.13" />
          <circle cx="80%" cy="90%" r="10" fill="#ffe0f7" opacity="0.13" />
          <circle cx="50%" cy="50%" r="30" fill="#ffb6d5" opacity="0.09" />
        </svg>
      </div>
    </div>
  );
};

export default Surprise;
