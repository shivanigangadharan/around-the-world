import React from 'react';
import styled from 'styled-components';

const Sub = styled.div`
color: darkblue;
font-size: 200%;
margin-top: 3%;
font-weight: 500;
`
const Heading = styled.div`
color: darkblue;
font-weight: 700;
font-size: 123%;
`
const Main = styled.div`
    text-align: center;
    background: lightgray;
    margin-top: 4%;
    padding-top: 3.5%;
    padding-bottom: 4%;
`
const Source = styled.div`
    color: black;
    font-size: 120% !important;
`
function Quotes() {
    return (
        <Main>

            <div className="container">
                <div className="row justify-content-center">
                    <Heading className="col-12">  What Parliamentarians Are Saying<br /> </Heading>

                    <div className="col-lg-6 col-sm-12">
                        <Sub> “Whatever it is, the way you tell your story online can make all the difference.”
           <br /><br /> </Sub> <Source>— Quote Source</Source>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Sub> “Whatever it is, the way you tell your story online can make all the difference.”
                        <br /><br /></Sub><Source>— Quote Source</Source>
                    </div>

                </div></div>
        </Main>
    )
}

export default Quotes;