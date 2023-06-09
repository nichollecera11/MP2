import { Navigate, Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
// import Calendar from './components/Calendar.js';
import Contact from './components/Contact';
import NavBar from './components/NavBar.js';
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Navigate to ="/Home"/>} />
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Contact" element={<Contact/>} />
      </Routes>
      {/* <Calendar/> */}
    </Router>
  );
}

export default App;
