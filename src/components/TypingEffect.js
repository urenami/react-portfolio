import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const texts = [
    "Newbie coder, seeking my shot.",
    "ready to grow, eager to learn",
    "Looking to join a great team."
  ];

  const typingSpeed = 150; 
  const deletingSpeed = 75; 
  const pauseBetweenWords = 2000; 

  const [displayText, setDisplayText] = useState(''); 
  const [index, setIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [textIndex, setTextIndex] = useState(0); 
  const [isTyping, setIsTyping] = useState(true); 

  useEffect(() => {
    const currentText = texts[textIndex]; 

    const handleTyping = () => {
      if (isTyping) {
        if (index < currentText.length) {
          // Continues typing characters
          setDisplayText(currentText.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          // Once typing is complete, pause and start deleting
          setIsTyping(false);
          setTimeout(() => setIsDeleting(true), pauseBetweenWords);
        }
      }

      if (isDeleting) {
        if (index > 0) {
          // Continue deleting characters
          setDisplayText(currentText.substring(0, index - 1));
          setIndex(index - 1);
        } else {
          // After deleting, move to the next sentence and reset flags
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setIsTyping(true); 
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timer);

  }, [index, isTyping, isDeleting, textIndex, texts]);

  return (
    <div className="typing-container">
      <p className="typing-text">{displayText}</p>
    </div>
  );
};

export default TypingEffect;
