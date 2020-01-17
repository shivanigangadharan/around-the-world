import React, { useState, useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
// import './navbar.css';
// import { Link } from 'react-router-dom';
import { Icon } from 'antd';

const Nav = styled.nav`
background: #2A2829;
transition: top 0.5s;
position: fixed;
width: 100%;
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
      margin-top: 63vh;
      text-align: center;
      align-contents: center !important;
      display: inline-block;
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
        display: inline-block;
        width: 100%;
    }
  `
const NavRight = styled.div`
    @media screen and (max-width: 991px){
        text-align: center;
        align-contents: center !important;
        padding-bottom: 12vh;

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
    useEffect(() => {
        console.log("use effect hook called");
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                //showNav
                setNavState('0px');
                console.log("VISIBLE", currentScrollPos);
                prevScrollpos = currentScrollPos;

            }
            else {
                //hideNAV
                console.log("hidden", currentScrollPos);
                setNavState('-100px');
                prevScrollpos = currentScrollPos;

            }
        }
    })
    const navColors = ["navbar sticky-top navbar-expand-lg navbar-dark bg-dark", "navbar sticky-top navbar-expand-lg navbar-light bg-light"]
    const [navColor, setNavColor] = useState(navColors[0]);
    const [btnPad, setBtnPad] = useState("px-4 py-2 mr-4");
    const [isExpanded, setIsExpanded] = useState(false);
    const [screenWidth, setScreenWidth] = useState();
    console.log("navbar expanded?= ", isExpanded);
    useLayoutEffect(() => {
        function updateSize() {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);

    }, []);

    function toggleNav() {
        setIsExpanded(!isExpanded);
    }
    const [navState, setNavState] = useState('0px');

    return (
        <Nav id="navbar" style={{ 'top': navState }} className={(isExpanded && screenWidth < 992) ? navColors[1] : navColors[0]}>

            <Head className="navbar-brand" href="#">AEG India</Head>
            <button className="navbar-toggler" type="button" onClick={e => { toggleNav() }} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <NavRight className="collapse navbar-collapse justify-content-end" id="navbarNav">
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
            </NavRight >
        </Nav >
    )
}
export default Navbar;