import { useState, useEffect, useRef } from 'react';

export const useTypewriter = (strings, speed = 100, deleteSpeed = 50, delay = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef();

  useEffect(() => {
    const currentString = strings[stringIndex];
    
    const type = () => {
      if (!isDeleting) {
        if (displayText.length < currentString.length) {
          setDisplayText(currentString.substring(0, displayText.length + 1));
          timeoutRef.current = setTimeout(type, speed);
        } else {
          setIsTyping(false);
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
            setIsTyping(true);
          }, delay);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentString.substring(0, displayText.length - 1));
          timeoutRef.current = setTimeout(type, deleteSpeed);
        } else {
          setIsDeleting(false);
          setStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    };

    timeoutRef.current = setTimeout(type, speed);
    
    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, stringIndex, strings, speed, deleteSpeed, delay]);

  return { displayText, isTyping };
};

export default useTypewriter;
