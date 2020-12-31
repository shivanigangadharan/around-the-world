import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    padding-top: 4%;
    padding-bottom: 4%;
    padding-left: 14%;
    padding-right: 14%;
    text-align: center;
    color: black;
    @media screen and (max-width: 700px){
        margin-top: 8%;
        margin-bottom: 8%;
    }
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
@media screen and (max-width: 991px){
    margin-bottom: 4%;
}
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
                We are a team of tech and current affairs enthusiasts driven by the purpose to serve the latest and significant news to people. We believe having knowledge of the happenings around one's surroundings and the globe can help a person become more aware, have better conversation and also contribute better to the society. We hope we can bring about a positive change by providing the highlights around the world to people's screen.
            </TextMain>
            <Wrap className="container">
                <div className="row justify-content-center">
                    <SubText className="col-lg-4 col-m-4 col-xs-10">
                        <b> Strengthening Research</b><br />
                        Effective and robust research is what makes a news service more reliable and functional. So our team focuses on research for collecting news.
                </SubText>
                    <SubText className="col-lg-4 col-m-4 col-xs-10">
                        <b>Effective Policy Advocacy</b><br />
                        There are certain rules and regulations when it comes to administration. They are covered by the effective policies we have.            </SubText>
                    <SubText className="col-lg-4 col-m-4 col-xs-10">
                        <b> Consistent Development</b><br />
                        Consistent development is the essential key to serving the best product. We believe in regularly upgrading our skills and team.
            </SubText>
                </div></Wrap>
        </Main>
    )
}

export default WhatWeDo;