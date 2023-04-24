
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about/*" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
