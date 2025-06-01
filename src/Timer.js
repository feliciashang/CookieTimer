import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Timer.css';

const Timer = ({title, startTime, image}) => {
  console.log(image)
  const [time, setTime] = useState(startTime)
  const [isPause, setPause] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (time == 0) {
    setShowPopup(true)
    }
  }, [time]
  );
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current)
      startTimer()
    }
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
      setPause(true)
    } else {
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
      setPause(false)
    }
  }
  return (
    <div style={{textAlign: 'center'}}>
      <h2 style={{fontSize: '4rem'}}>{title}</h2>
      {showPopup ? ( 
            <div className="popup-content" >
              <span>
                 Ready!
              </span>
              <img 
            src={image}
            style=
            {{ 
                width: '45%', 
                height: 'auto',
                transform: title === 'Chill Dough' ? 'rotate(-25deg)' : 'none',
                margin: '0 auto 0.2rem',
            }} 
          />
              <button onClick={() => setShowPopup(false)}>
                Close
              </button>
             </div>
        ) : (
      <>
          <img 
            src={image}
            style=
            {{ 
                width: '45%', 
                height: 'auto',
                transform: title === 'Chill Dough' ? 'rotate(-25deg)' : 'none',
                margin: '0 auto 0.2rem',
            }} 
          />
          <h1 style={{fontSize: '10rem', margin: 0}}>{time}</h1>
          <div style={{ 
              display: 'flex', 
              fontSize: '3rem',
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '2rem', 
              marginTop: '1.5rem', 
              marginBottom: 0}}
          >
            <button className="Button" onClick={pauseTimer}>
              {isPause ? 'Resume' : 'Pause'}
            </button>
            <Link to="/">
              <button className="Button">Back</button
            ></Link>
          </div>
      </>
      )}
    </div>
  )
}

export default Timer