import React from "react";
import './App.css';
import Home from './components/home/Home';
import Transaction from "./components/transaction/Transaction";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Login from './components/auth/login/login';
import SignUp from './components/auth/signup/SignUp';
import { AuthProvider } from "./components/contexts/authContext";
import AboutUs from "./components/aboutUs/AboutUs";

function App() {
  return (
    <AuthProvider>
    <Navbar />
    <main className="main-content">
      <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
           <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </main>
  </AuthProvider>
  );
}

export default App;
