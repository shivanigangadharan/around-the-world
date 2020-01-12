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
`


function LetsMeet() {
    return (
        <Main className="container">

            <div className="row justify-content-center">
                <Head className="col-lg-6 col-sm-12">Let’s meet up in real life to share in the beauty of the natural world.<br /><br /></Head>
                <Sub className="col-lg-6 col-sm-12"> Sign up to be the first to know about our events. In sit amet felis malesuada, feugiat purus eget, varius mi. Nulla lectus ante, consequat et ex eget, feugiat tincidunt metus.</Sub>

            </div>

        </Main>
    )
}

export default LetsMeet;