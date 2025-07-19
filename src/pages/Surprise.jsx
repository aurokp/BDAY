import React, { useState, useEffect } from 'react';

const Surprise = () => {
  const [fadeClass, setFadeClass] = useState('fade-in');
  useEffect(() => {
    setFadeClass('fade-in');
    return () => setFadeClass('');
  }, []);
  return (
    <div className={fadeClass} style={{
      background: '#fff',
      color: 'hotpink',
      minHeight: '100vh',
      padding: '2rem',
      borderRadius: '2rem',
      boxShadow: '0 4px 16px rgba(255,105,180,0.10)'
    }}>
      <h1></h1>
      <p style={{ color: 'hotpink', fontWeight: 'bold', fontSize: '1.2rem' }}>Happy birthday to you!,<br/>
to the poetic, sweet,
supportive , caring,
cool girl i know of.<br/><br/>



Finally of my age now huh<br/>
Kemiti laguchi? mote kahibu hela 😂<br/>
Hope Ei barsa gata barsa thu bhi bahut bhala jau to paain
<br/><br/><br/>

I wanna say thanks for being the most amazing <br/>
and caring bestie of mine.<br/>
<br/><br/>
A day has hardly passed without us talking,<br/>
department re heu ki call re ya chat re.Aji v free hele<br/>
kahibu kathaheba 😂<br/><br/><br/>

Ama friendship eternity jain chalithau.<br/>
As we say BFF for lyf.<br/>



<br/><br/>
Au gote katha<br/>
Reels check Kariba bhulibuni hela😅 <br/><br/><br/>

Meet you soon kayi saare baatein karenge.<br/><br />


Above all,<br/>
aaj tera din hai yaaar!<br/>
have an amazing birthday coz you truly deserve it.<br/><br/>

Enjoy karna full on masti😎🤟
<br/><br/>
Love you yaar 😊❤️<br/>
</p>
    </div>
  );
};

export default Surprise;
