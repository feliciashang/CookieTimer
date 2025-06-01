import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Timer from './Timer';
import Home from './Home';
import roller from './assets/roller.png'
import cookieImage from './assets/cookieImage.jpg';
import fanImage from './assets/fan.png';
import ovenImage from './assets/ovenImage.png';

function App() {
  return (
    <Router>
      <div className="pixel-bg">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dough" element={<Timer title="Chill Dough" startTime={30} image={roller}/>} />
        <Route path="/preheat" element={<Timer  title="Preheat" startTime={120} image={ovenImage}/>} />
        <Route path="/bake" element={<Timer  title="Bake" startTime={60} image={cookieImage}/>} />
        <Route path="/cool" element={<Timer  title="Cool" startTime={60} image={fanImage}/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
