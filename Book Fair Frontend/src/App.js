import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";
import Success from "./components/Success";
import Navbar from "./components/Navbar";
import StallReservation from "./components/StallReservation"; // ✅ Import Stall Reservation
import "./Login.css";

function App() {
  return (
    <BrowserRouter>
      {/* ✅ Navbar visible on all pages */}
      <Navbar />

      <Routes>
        {/* Redirect root path to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/success" element={<Success />} />

        {/* Protected routes */}
        <Route
          path="/home"
          element={

              <Home />
          }
        />

        {/* ✅ Stall Reservation Page */}
        <Route
          path="/stall-reservation"
          element={
            
              <StallReservation />
           
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
