import { Navigate, Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
// import Calendar from './components/Calendar.js';
import Contact from './components/Contact';

import Register from './components/Register';
import Login from './components/Login';
import Reservation from './components/Reservation.js';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Navigate to ="/Home"/>} />
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Reservation" element={<Reservation/>} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Login" element={<Login/>} />
      </Routes>
      {/* <Calendar/> */}
    </Router>
  );
}

export default App;
