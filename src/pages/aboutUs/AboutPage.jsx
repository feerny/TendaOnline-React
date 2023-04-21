import React from 'react';

import { Link } from 'react-router-dom';

function AboutPage(props) {
    return (
        <div>
          <ul>
            <li><Link to="/about/contact">Contact</Link></li>
            <li><Link to="/home">Home</Link></li>
          </ul>
            <h1 style={{textAlign:"center"}}>este es el apartado de aboutPage</h1>
        </div>
    );
}

export default AboutPage;