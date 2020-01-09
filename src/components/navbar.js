import React from 'react';
import styled from 'styled-components';
// import './navbar.css';
// import { Link } from 'react-router-dom';

const Name = styled.div`
  
    margin-left: 0%;
`
function Navbar() {
    return (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <a className="navbar-brand" href="">AEG India</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navList" aria-controls="navList" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse " id="navList">
        //         <div className="navbar-nav">
        //             <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
        //             <a className="nav-item nav-link" href="#">Features</a>
        //             <a className="nav-item nav-link" href="#">Pricing</a>
        //         </div>
        //     </div>
        // </nav>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">AEG India</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Features</a>
                    </li> 
                    
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Donate</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}
export default Navbar;