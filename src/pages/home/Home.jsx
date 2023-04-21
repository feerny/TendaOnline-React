import React from 'react';
import {Link} from 'react-router-dom';

function Home(props) {
    return (
        <div>
          <ul>
            <li><Link to="/about">Acerca de</Link></li>
          </ul>
            <h1 >este es el home</h1>
        </div>
    );
}

export default Home;