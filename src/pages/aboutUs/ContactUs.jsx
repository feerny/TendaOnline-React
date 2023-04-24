import React, { useEffect } from 'react';

function ContactUs(props) {
    useEffect(() => {
        props.setlinkNavActivo("nav-link-2")
    }, [ ])
    return (
        <div>
            <h1 style={{textAlign:"center"}}>este es el apartado de contactUs</h1>
        </div>
    );
}

export default ContactUs;