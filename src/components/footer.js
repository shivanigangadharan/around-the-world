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
@media screen and (max-width: 600px){
    padding-left: 14%;
}
`
const Follow = styled.div`
`
const Right = styled.div`
    width: 25%;
    float: right;
    @media screen and (max-width: 600px){
        float: left;
    }
`

function Footer() {
    return (
        <Main>
            <div className="container">
                <div style={{ 'width': '100%' }} className="row">
                    <Clarkson className="col-lg-6 col-sm-6 col-xs-12">
                        <b>CLARKSON</b><br /><br />
                        123 Demo Street<br />
                        New York, NY 12345<br />
                        <u>(555) 555-5555</u><br /><br />

                        Made with <A href="" style={{ 'color': 'white' }}>Squarespace</A>
                    </Clarkson>

                    <Follow className="col-lg-6 col-sm-6 col-xs-12">
                        <Right>
                            <b> Follow</b><br /><br />
                            <A href="" style={{ 'color': 'white' }}>Twitter</A><br />
                            <A href="" style={{ 'color': 'white' }}>LinkedIn</A><br />
                            <A href="" style={{ 'color': 'white' }}>Facebook</A>
                        </Right>
                    </Follow>
                </div>
            </div>
        </Main>
    )
}

export default Footer;