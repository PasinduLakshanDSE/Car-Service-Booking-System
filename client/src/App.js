import logo from './logo.svg';
import './App.css';
//import NavBar from './Compornents/NavBar';
//import DashBoard from './Compornents/DashBoard';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './Compornents/NavBar';
import { Routes, Route, Form } from 'react-router-dom'; // Import Routes and Route
import About from './Compornents/Pages/About';
import Home from './Compornents/Pages/Home';
import Contact from './Compornents/Pages/Contact';
import Services from './Compornents/Pages/Services';
import WOW from 'wowjs';
import 'animate.css';



function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
    </div>
  );
}

export default App;
