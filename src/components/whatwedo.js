import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    padding-top: 4%;
    padding-bottom: 4%;
    padding-left: 14%;
    padding-right: 14%;
    text-align: center;
`
const Heading = styled.text`
    font-size: 230%;
    font-weight: 500;
    color: black;
`
const TextMain = styled.div`
    text-align: justify;
    font-size: 110%;
`
const SubText = styled.div`
font-size: 110%;
margin-top: 2%;

`
const Wrap = styled.div`
    text-align: center;
    margin-top: 4.5%;
`

function WhatWeDo() {
    return (
        <Main>
            <Heading> What we do </Heading> <br /><br />
            <TextMain>
                In India, parliament is the institution of democracy and Members of Parliament (MP) are responsible to keep this institution responsive to the needs of people. MPs are at the core of every democratic function - overseeing the executive and judicial branches of government, advocating for legislative change, and ensuring that the government never loses touch with the people who put them in power, among others.
            </TextMain>
            <Wrap className="container">
                <div className="row justify-content-center">
                    <SubText className="col-lg-4 col-m-4 col-xs-10">
                        <b> Strengthening Research</b><br />
                        It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.
            </SubText>
                    <SubText className="col-lg-4 col-m-4 col-xs-10">
                        <b>Effective Policy Advocacy</b><br />
                        It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.
            </SubText>
                    <SubText className="col-lg-4 col-m-4 col-xs-10">
                        <b> Constituency Development</b><br />
                        It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.
            </SubText>
                </div></Wrap>
        </Main>
    )
}

export default WhatWeDo;