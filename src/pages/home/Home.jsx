import React, { useEffect,useState } from 'react';
import Nav from '../../components/nav/Nav';

function Home(props) {
    const [linkNavActivo, setlinkNavActivo] = useState("")

    useEffect(() => {
        setlinkNavActivo("nav-link-3")
    }, [ ])
    
    return (
        <div>
            <Nav linkNavActivo={linkNavActivo}/>
            <h1 >este es el home</h1>
        </div>
    );
}

export default Home;