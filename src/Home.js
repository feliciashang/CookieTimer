import React from 'react'
import { Link } from 'react-router-dom';

function Home () {
  return (
    <div>
      <h1>Cookie Timer</h1>
      Which step are you on?
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
        <Link to="/dough">Chill dough</Link>
        <Link to="/preheat">Preheat</Link>
        <Link to="/bake">Bake</Link>
        <Link to="/cool">Cool</Link>
      </div>
    </div>
  )
}

export default Home