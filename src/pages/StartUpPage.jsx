// Sahil
import React from "react";
import "./StartUpPage.scss";
import { useNavigate } from "react-router-dom";
import HomeBanner from "./banner/Banner";

function StartUpPage() {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <HomeBanner />
      <header>
        <h1 className="logo">ScholarSphere</h1>
      </header>
      <main>
        <section className="quick-links">
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item" onClick={() => navigate("/courses")}>
                <a>Courses</a>
              </li>
              <li className="nav-item" onClick={() => navigate("/grades")}>
                <a>Grades</a>
              </li>
              <li className="nav-item" onClick={() => navigate("/calendar")}>
                <a>Academic Calendar</a>
              </li>
            </ul>
          </nav>
        </section>

        <section className="announcements">
          <h2>Announcements</h2>
          <ul>
            <li>Fall Semester Registration opens June 1st</li>
            <li>New library hours starting September 1st</li>
          </ul>
        </section>

        <section className="resources">
          <h2>Campus Resources</h2>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/writing-center">Writing Center</a>
              </li>
              <li className="nav-item">
                <a href="/tutoring">Tutoring</a>
              </li>
              <li className="nav-item">
                <a href="/counseling">Counseling</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default StartUpPage;
