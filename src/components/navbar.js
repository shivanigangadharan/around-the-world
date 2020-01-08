import React from 'react';
import styled from 'styled-components';
// import './navbar.css';
// import { Link } from 'react-router-dom';

const Name = styled.div`
  
    margin-left: 0%;
`
function Navbar() {
    return (
        // <nav className="navbar bg-white navbar-expand-md fixed-top ">
        //     AEG



        //     <button className="navbar-toggler" type="button" data-target="#links" data-toggle="collapse">
        //         <span className="fa fa-bars"></span>
        //     </button>

        //     <div className="collapse navbar-collapse" id="links">
        //         <ul className="navbar-nav ml-auto">
        //             <li className="nav-item">
        //                 <text className="nav-link">Home</text>
        //             </li>
        //             <li className="nav-item">
        //                 <text className="nav-link">About</text>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Features</a>
                    <a className="nav-item nav-link" href="#">Pricing</a>
                    <a className="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;