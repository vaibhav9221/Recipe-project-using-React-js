import React from 'react'


function Navbar() {
    return (
        <div style={{backgroundColor:'brown'}}>
            <h1>React meals</h1>
            <a style={{margin:'10px',color:'white',cursor:'pointer'}}>Home</a>
            <a style={{margin:'10px',color:'white',cursor:'pointer'}}>order</a>
            <a style={{margin:'10px',color:'white',cursor:'pointer'}}>Contact us</a>
        </div>
    )
}

export default Navbar
