import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
font-size: 200%;
color: black;
font-weight: 700;
`
const Sub = styled.div`
font-size:120%;
`
const Main = styled.div`
    padding-top: 4%;
    padding-bottom: 4%;
    @media screen and (max-width: 700px){
        padding-left: 14%;
        padding-right: 14%;
        padding-top: 8%;
        padding-bottom: 10%;
    }
`
const Input = styled.input`
    border-radius: 4px;
    border: 1px solid lightgray;
    background: ghostwhite;
    padding: 2%;
    width: 60%;
    margin-top: 2%;
`
const Submit = styled.input`
    color: white;
    background: #253551;
    border: 1px solid #253551;
    border-radius: 4px;
    font-size: 90%;
    padding-top: 2.4%;
    padding-bottom: 2.4%;
    padding-right: 5%;
    padding-left: 5%;
    margin-left: 2%;
`

function LetsMeet() {
    const formSubmit = (e) => {
        window.location.reload(false);
    }
    return (
        <Main className="container">
            <div className="row justify-content-center">
                <Head className="col-lg-6 col-sm-12">Let’s meet up in real life to share in the beauty of the natural world.<br /><br /></Head>
                <Sub className="col-lg-6 col-sm-12">
                    Sign up to be the first to know about our events. In sit amet felis malesuada, feugiat purus eget, varius mi. Nulla lectus ante, consequat et ex eget, feugiat tincidunt metus.
                <br /><br />
                    <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd29LCIXQ_WPn9xEtbiU-FE4cA_dinZxa9mcAg35KF27_3A3w/formResponse"
                        onSubmit={formSubmit} target="dummyframe"
                        method="POST" name="myform">
                        <Input type="email" name="entry.997792246" placeholder="Email Address" required />
                        <Submit type="submit" value="Sign Up" />
                    </form>
                </Sub>

            </div>
            <iframe width="0" height="0" border="0" name="dummyframe" id="dummyframe"></iframe>

        </Main>
    )
}

export default LetsMeet;