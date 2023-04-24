import React, { useEffect } from 'react';


function AboutPage(props) {
    useEffect(() => {
        props.setlinkNavActivo("nav-link-1")
    }, [ ])
    return (
        <div>
            <h1 style={{textAlign:"center"}}>este es el apartado de aboutPage</h1>
        </div>
    );
}

export default AboutPage;