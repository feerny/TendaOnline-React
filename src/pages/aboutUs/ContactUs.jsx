import React from 'react';

import { Link } from 'react-router-dom';

function ContactUs(props) {
    return (
        <div>
          <ul>
            <li><Link to="/about">Acerca de</Link></li>
            <li><Link to="/home">Home</Link></li>
          </ul>
            <h1 style={{textAlign:"center"}}>este es el apartado de contactUs</h1>
        </div>
    );
}

export default ContactUs;