import React from 'react';
import styled from 'styled-components';

const Clarkson = styled.div`
@media screen and (max-width: 600px){
    margin-bottom: 3%;
}
`

const A = styled.a`
    text-decoration: underline;
    &:hover {
        color: lightgray !important;
    }
    
`
const Main = styled.div`
background: #2A2829;
color: white;
padding: 4%;
font-size:110%;
`

function Footer() {
    return (
        <Main>
            <div className="container">
                <div className="row">
                    <Clarkson className="col-lg-6 col-sm-6 col-xs-12">
                        <b>CLARKSON</b><br /><br />
                        123 Demo Street<br />
                        New York, NY 12345<br />
                        <u>(555) 555-5555</u><br /><br />

                        Made with <A href="" style={{ 'color': 'white' }}>Squarespace</A>
                    </Clarkson>

                    <div className="col-lg-6 col-sm-6 col-xs-12">
                        <b> Follow</b><br /><br />
                        <A href="" style={{ 'color': 'white' }}>Twitter</A><br />
                        <A href="" style={{ 'color': 'white' }}>LinkedIn</A><br />
                        <A href="" style={{ 'color': 'white' }}>Facebook</A>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Footer;