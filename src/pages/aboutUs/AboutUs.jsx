import React, {  useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import ContactUs from './ContactUs';
import Nav from '../../components/nav/Nav';

function AboutUs(props) {
  const [linkNavActivo, setlinkNavActivo] = useState("")
    return (
        <div>
          <Nav linkNavActivo={linkNavActivo}/>
            <h1>este es el contenido de aboutUs</h1>
            <Routes>              
                <Route exact path="/about" element={<AboutPage setlinkNavActivo={setlinkNavActivo} />} />
                <Route path="/contact" element={<ContactUs setlinkNavActivo={setlinkNavActivo} />} />
            </Routes>
        </div>
      );
}

export default AboutUs;