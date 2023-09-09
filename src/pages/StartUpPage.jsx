// Sahil
import React from 'react';
import './StartUpPage.scss';

function StartUpPage() {
  return (
    <div className="dashboard">
      <header>
        <h1 className="logo">ScholarSphere</h1>
      </header>

      <main>
        <section className="quick-links">
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item"><a href="/courses">Courses</a></li>
              <li className="nav-item"><a href="/grades">Grades</a></li>
              <li className="nav-item"><a href="/calendar">Academic Calendar</a></li>
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
              <li className="nav-item"><a href="/writing-center">Writing Center</a></li>
              <li className="nav-item"><a href="/tutoring">Tutoring</a></li>
              <li className="nav-item"><a href="/counseling">Counseling</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default StartUpPage;
