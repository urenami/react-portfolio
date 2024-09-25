import React, { useEffect, useState } from 'react';
import './TypingEffect.css'; 

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, 100); 

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="typing-container">
      <p className="typing-text">{displayedText}</p>
    </div>
  );
};

export default TypingEffect;
