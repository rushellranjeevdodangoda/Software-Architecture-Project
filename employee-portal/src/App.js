import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeLogin from "./pages/EmployeeLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
