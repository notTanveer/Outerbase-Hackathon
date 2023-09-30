// Sahil
import React from "react";
import "./StartUpPage.scss";
import { useNavigate } from "react-router-dom";
import HomeBanner from "./banner/Banner";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function StartUpPage() {
  const navigate = useNavigate();
  const testimonialData = [
    {
      text: "I love this product! It's changed my life.",
      name: "John Doe",
      image: "john-doe.jpg",
    },
    {
      text: "Highly recommended. Excellent quality.",
      name: "Jane Smith",
      image: "jane-smith.jpg",
    },
    {
      text: "Outstanding service and support!",
      name: "Bob Johnson",
    },
  ];
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
        <section className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonials-list">
            {testimonialData.map((testimonial, i)=>(
              <Testimonials 
                key={i}
                name={testimonial.name}
                text={testimonial.text}
                image={testimonial.image}/>

            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default StartUpPage;
