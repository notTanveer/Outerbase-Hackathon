import React from "react";
import "./App.scss";

import StudentDashboard from "./pages/student/dashboard";
import StartUpPage from "./pages/StartUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/components/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<StartUpPage />} />
          <Route path="/student" element={<StudentDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
