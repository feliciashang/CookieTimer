import React from 'react'
import { Link } from 'react-router-dom';
const Timer = ({title, time}) => {
  const [time, setTime] = useState(time)
  function startTimer() {

  }
  return (
    <div>
      <h2>{title}</h2>
      <h1>time</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={endTimer}>Pause</button>
      <Link to="/">
        <button>Back to Home</button
      ></Link>
    </div>
  )
}

export default Timer