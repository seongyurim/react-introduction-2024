import './App.css';
import Homepage from './page/Homepage';
import About from './page/About';
import { Routes, Route } from  "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
