import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import ContactUs from './ContactUs';

function AboutUs(props) {
    return (
        <div>
          <h2>Acerca de nosotros links</h2>
          <ul>
            <li><Link to="/about/contact">Blog</Link></li>
            <li><Link to="/home">Home</Link></li>
          </ul>
            <Routes>
                <Route exact path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </div>
      );
}

export default AboutUs;