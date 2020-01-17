import React from 'react';
import styled from 'styled-components';

const Sub = styled.div`
color: #253551;
font-size: 200%;
margin-top: 3%;
font-weight: 500;
width: 90%;
margin-left: 5%;
`
const Heading = styled.div`
color: #253551;
font-weight: 800;
font-size: 123%;
`
const Main = styled.div`
    text-align: center;
    background: #E0E0DB;
    margin-top: 4%;
    padding-top: 3.5%;
    padding-bottom: 4%;
    @media screen and (max-width: 700px){
        padding-left: 14%;
        padding-right: 14%;
    }
`
const Source = styled.div`
    color: black;
    font-size: 120% !important;
`
function Quotes() {
    return (
        <Main>
            <Heading className="col-12"> <b> What Parliamentarians Are Saying </b><br /> </Heading>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <Sub><b> “Whatever it is, the way you tell your story online can make all the difference.”</b>
                                        <br /><br /> </Sub> <Source>— Quote Source</Source>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <Sub><b> “Whatever it is, the way you tell your story online can make all the difference.”</b>
                                        <br /><br /> </Sub> <Source>— Quote Source</Source>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <Sub><b> “Whatever it is, the way you tell your story online can make all the difference.”</b>
                                        <br /><br /> </Sub> <Source>— Quote Source</Source>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <Sub><b> “Whatever it is, the way you tell your story online can make all the difference.”</b>
                                        <br /><br /> </Sub> <Source>— Quote Source</Source>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <Sub><b> “Whatever it is, the way you tell your story online can make all the difference.”</b>
                                        <br /><br /> </Sub> <Source>— Quote Source</Source>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <Sub><b> “Whatever it is, the way you tell your story online can make all the difference.”</b>
                                        <br /><br /> </Sub> <Source>— Quote Source</Source>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        </Main>
    )
}

export default Quotes;