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
import About from './Compornents/Pages/About/About';
import Home from './Compornents/Pages/Home/Home';
import Contact from './Compornents/Pages/Contact/Contact';
import Services from './Compornents/Pages/Services/Services';
import Full from './Compornents/Pages/Services/Full';
import WOW from 'wowjs';
import 'animate.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from './Compornents/Footer';
import Scanning from './Compornents/Pages/Services/Scanning';
import Setup from './Compornents/Pages/Services/Setup';
import Altenator from './Compornents/Pages/Services/Altenator';
import Light from './Compornents/Pages/Services/Light.';
import Starting from './Compornents/Pages/Services/Starting';




function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/FullWiring" element={<Full/>} />
          <Route path="/Altenator" element={<Altenator/>} />
          <Route path="/Light" element={<Light/>} />
          <Route path="/Scanning" element={<Scanning/>} />
          <Route path="/Setup" element={<Setup/>} />
          <Route path="/Starting" element={<Starting/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
