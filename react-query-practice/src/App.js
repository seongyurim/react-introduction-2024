import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import SecondPage from './page/SecondPage';
import ManualFetch from './page/ManualFetch';

function App() {
  return (
    <div style={{textAlign: "center", lineHeight: "1.5"}}>
      <nav style={{backgroundColor: "beige", padding: "20px"}}>
        <Link to="/" style={{marginRight: "10px"}}>
          HomePage
        </Link>
        <Link to="/second" style={{marginRight: "10px"}}>
          SecondPage
        </Link>
        <Link to="/manual">
          MaunalFetch
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/manual" element={<ManualFetch />} />
      </Routes>
    </div>
  );
}

export default App;
