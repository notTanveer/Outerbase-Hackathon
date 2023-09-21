import React from "react";
import "./App.scss";
import StudentDashboard from "./pages/student/dashboard";
import StartUpPage from "./pages/StartUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/components/navbar";
import Library from "./pages/courses/resources/library";
import Chat from "./pages/chat/interface";
import ChatApp from "./pages/chat/server";
import Registration from "./pages/Registration";
import LoginPage from "./pages/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<StartUpPage />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/library" element={<Library />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
