import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Timer = ({title, startTime}) => {
  const [time, setTime] = useState(startTime)
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, []);

  const startTimer = () => {
    if (intervalRef.current != null) return;
    intervalRef.current = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null;
    }
  }
  return (
    <div>
      <h2>{title}</h2>
      <h1>{time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <Link to="/">
        <button>Back to Home</button
      ></Link>
    </div>
  )
}

export default Timer