import React, { useState } from 'react';
import styled from 'styled-components';
// import './navbar.css';
// import { Link } from 'react-router-dom';
import { Icon } from 'antd';

const Nav = styled.nav`
background: #2A2829;
@media screen and (max-width: 991px){
   position: relative;
   background: white;
    }
`
const Head = styled.a`
font-size: 200%;
font-weight: 600;
padding-top: 1%;
padding-bottom: 1%;
padding-left: 2%;
`
const UL = styled.ul`
@media screen and (max-width: 991px){
      margin-top: 75vh;
      margin-left: 35vw;
}`
const Donate = styled.button`
    background: white;
    color: black;
    border: 1px solid white;
    font-weight: 600;
    border-radius: 4px;
    @media screen and (max-width: 991px){
        background: #253551;
        color: white;
        font-weight: light !important;
        margin-left: 1%;


    }
  `


const I = styled(Icon)`
color: white;
font-size: 130%;
@media screen and (max-width: 991px){
    color: black; 
    font-size: 150%;    
}
`
function Navbar() {
    const navColors = ["navbar sticky-top navbar-expand-lg navbar-dark bg-dark", "navbar sticky-top navbar-expand-lg navbar-light bg-light"]
    const [navColor, setNavColor] = useState("navbar sticky-top navbar-expand-lg navbar-dark bg-dark");
    const [btnPad, setBtnPad] = useState("px-4 py-2 mr-4");
    function toggleNav() {
        if (navColor == navColors[0]) {
            // dark
            setNavColor(navColors[1]);

            //light nav
            setBtnPad("px-5 py-2 mr-4");
        }
        else {
            //light nav
            setNavColor(navColors[0]);

            //dark nav
            setBtnPad("px-4 py-2 mr-4");
        }
    }
    return (
        <Nav className={navColor}>
            <Head className="navbar-brand" href="#">AEG India</Head>
            <button className="navbar-toggler" type="button" onClick={e => { toggleNav() }} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <UL className="navbar-nav">
                    <div style={{ 'margin-right': '4%', 'display': 'flex', 'margin-top': '4%' }}>
                        <li> <I className="mx-3" type="twitter" /> </li>
                        <li> <I className="mx-3" type="linkedin" /> </li>
                        <li> <I className="mx-3" type="facebook" /></li>
                    </div>
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><Donate className={btnPad}>Donate</Donate> </a>
                    </li>


                </UL>
            </div >
        </Nav >
    )
}
export default Navbar;