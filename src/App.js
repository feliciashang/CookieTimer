import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Timer from './Timer';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dough" element={<Timer title="Chill Dough"/>} />
        <Route path="/preheat" element={<Timer  title="Preheat"/>} />
        <Route path="/bake" element={<Timer  title="Bake"/>} />
        <Route path="/cool" element={<Timer  title="Cool"/>} />
      </Routes>
    </Router>
  );
}

export default App;
