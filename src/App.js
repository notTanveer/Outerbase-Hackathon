import React, { useEffect, useState } from "react";
import "./App.scss";
import StudentDashboard from "./pages/student/dashboard";
import StartUpPage from "./pages/StartUpPage";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./pages/components/navbar";
import Library from "./pages/courses/resources/library";
import Chat from "./pages/chat/interface";
import ChatApp from "./pages/chat/server";
import Registration from "./pages/Registration";
import LoginPage from "./pages/login";
import UserRegistration from "./pages/UserRegistration/UserRegistration";
import CourseEnroll from "./pages/courses/courseEnroll";
import CourseView from "./pages/courses/courseView";

function App() {
  const [token, setToken] = useState();
  const [register, setRegister] = useState();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const data = JSON.parse(localStorage.getItem("token"));
      setToken(data);
    } else {
    }
    if (localStorage.getItem("register")) {
      const data = localStorage.getItem("register");
      setRegister(data);
    } else {
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar token={token} register={register} />
        <Routes>
          <Route path="/" element={<StartUpPage />} />
          {register && <Route path="/student" element={<StudentDashboard />} />}
          {register && <Route path="/chat" element={<Chat />} />}
          {token && (
            <Route
              path="/register"
              element={<UserRegistration setRegister={setRegister} />}
            />
          )}
          <Route path="/library" element={<Library />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/course" element={<CourseEnroll />} />
          <Route path="/course/:id" element={<CourseView />} />
          <Route
            path="/login"
            element={<LoginPage setToken={setToken} register={setRegister} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
