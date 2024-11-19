import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import NavBar from './Compornents/NavBar';
import Footer from './Compornents/Footer';
import About from './Compornents/Pages/About/About';
import Home from './Compornents/Pages/Home/Home';
import Contact from './Compornents/Pages/Contact/Contact';
import Services from './Compornents/Pages/Services/Services';
import Full from './Compornents/Pages/Services/Full';
import Altenator from './Compornents/Pages/Services/Altenator';
import Light from './Compornents/Pages/Services/Light.';
import Scanning from './Compornents/Pages/Services/Scanning';
import Setup from './Compornents/Pages/Services/Setup';
import Starting from './Compornents/Pages/Services/Starting';
import Products from './Compornents/Pages/Products/Products';
//import AuthForm from './Compornents/LoginForm';
import Log from './Compornents/SignIn_SignUp/Log';
import SignInForm from './Compornents/SignIn_SignUp/SignIn';
import SignUpForm from './Compornents/SignIn_SignUp/SignUp';

function App() {
  const location = useLocation();  // Get the current route location

  // List routes where NavBar and Footer should not appear
  const noNavFooterRoutes = ['/Log'];

  return (
    <div className="App">
      {/* Render NavBar only if the current route is not '/LoginForm' */}
      {!noNavFooterRoutes.includes(location.pathname) && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/FullWiring" element={<Full />} />
        <Route path="/Altenator" element={<Altenator />} />
        <Route path="/Light" element={<Light />} />
        <Route path="/Scanning" element={<Scanning />} />
        <Route path="/Setup" element={<Setup />} />
        <Route path="/Starting" element={<Starting />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Log" element={<Log/>} />
        <Route path='/SignInForm' element={<SignInForm/>}/>
        <Route path='/SignUpForm' element={<SignUpForm/>}/>
      </Routes>

      {/* Render Footer only if the current route is not '/LoginForm' */}
      {!noNavFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
