import React, { useEffect, useState } from "react";
import "./App.scss";
import StudentDashboard from "./pages/student/dashboard";
import StartUpPage from "./pages/StartUpPage";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./pages/components/navbar";
import Library from "./pages/courses/resources/library";
import Registration from "./pages/Registration";
import LoginPage from "./pages/login";
import UserRegistration from "./pages/UserRegistration/UserRegistration";
import CourseEnroll from "./pages/courses/courseEnroll";
import CourseView from "./pages/courses/courseView";
import ResourcePage from "./pages/courses/resources/resources";
import InstructorLoginPage from "./pages/instructor/insLogin";
import InstructorDashboard from "./pages/instructor/insDashboard";

function App() {
  const [token, setToken] = useState();
  const [register, setRegister] = useState();
  const [courseSelected, setCourseSelected] = useState();
  const [instructor, setInstructor] = useState();
  useEffect(() => {
    if (localStorage.getItem("instructor")) {
      setInstructor(JSON.parse(localStorage.getItem("instructor")));
    }
    if (localStorage.getItem("token")) {
      const data = JSON.parse(localStorage.getItem("token"));
      setToken(data);
    }
    if (localStorage.getItem("register")) {
      const data = localStorage.getItem("register");
      setRegister(data);
    }
    if (localStorage.getItem("course")) {
      setCourseSelected(localStorage.getItem("course"));
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar register={register} instructor={instructor} />
        <Routes>
          <Route path="/" element={<StartUpPage register={register} />} />
          {courseSelected && (
            <Route path="/student" element={<StudentDashboard />} />
          )}
          {token && (
            <Route
              path="/register"
              element={<UserRegistration setRegister={setRegister} />}
            />
          )}
          <Route path="/library" element={<Library />} />
          <Route path="/instructor" element={<InstructorDashboard />} />
          <Route path="/instructor/login" element={<InstructorLoginPage />} />
          <Route path="/library/:id" element={<ResourcePage />} />
          <Route path="/signup" element={<Registration />} />
          {register && <Route path="/course" element={<CourseEnroll />} />}
          {register && <Route path="/course/:id" element={<CourseView />} />}
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
