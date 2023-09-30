import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <div className='footer-logo'>
                <h2>Scholar Sphere</h2>
            </div>
            <div className='footer-link'>
                <h3>Links</h3>
                <ul>
                    <li className='footer-links'><a href='/'>Home</a></li>
                    <li className='footer-links'><a href='/about-us'>About us</a></li>
                    <li className='footer-links'><a href='/course'>Courses</a></li>
                    <li className='footer-links'><a href='/faqs'>Faqs</a></li>
                    <li className='footer-links'><a href='/contact'>Contact Us</a></li>
                </ul>

            </div>
            <div className='footer-contact'>
                <h3>Contact Us</h3>
                <p>Email: feedback@scholarsphere.com</p>
            </div>
        </div>
        <div className='footer-bottom'>
            <p>&copy; {new Date().getFullYear()} ScholarSphere. All rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer