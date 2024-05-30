import React from 'react';
import Navbar from './Components/Navbar/Nav.jsx';
import Home from './Components/home/Home';
import Download from "./Components/Download/Download.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/signup/Register.jsx"; // Import the Register component
import Templates from "./Components/template/Template.jsx"; // Import the Templates component
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Template from './Components/template/Template.jsx';
import CertificatePrintable from './Components/CertificatePrintable.jsx';
import QRCode from "react-qr-code";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Route */}
          <Route path="/login" element={<Login />} /> {/* Login Route */}
          <Route path="/register" element={<Register />} /> {/* Register Route */}
          <Route path="/template" element={<Template />} /> {/* Templates Route */}
          <Route path="/download" element={<Download />} /> {/* Download Route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
