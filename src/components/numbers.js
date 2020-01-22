import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
    padding-top: 2%;
    padding-bottom: 2%;
    color: white;
`
const Sub = styled.div`
text-align: center;
padding-top: 2%;
padding-bottom: 2%;
`
const Num = styled.div`
    font-size: 300%;
    font-weight: 500;
    

`
const Text = styled.div`
    font-size: 125%;
    

`
const Main = styled.div`
    background-image: url("https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/N69pMl5/stars-rotating-north-pole-star-night-sky-polaris-time-lapse_hglvfkca_thumbnail-full01.png");
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 700px){
        padding-top: 8%;
        padding-bottom: 9%;
    }
    `
function Numbers() {
    return (
        <Main>
            <div className="container">
                <Block className="row justify-contents-center">
                    <Sub className="col-lg-3 col-md-3 col-sm-12"><Num> 30+ </Num> <br />
                        <Text> Members of Parliament </Text> </Sub>
                    <Sub className="col-lg-3 col-md-3 col-sm-12"><Num> 120+ </Num><br />
                        <Text> Interns </Text> </Sub>
                    <Sub className="col-lg-3 col-md-3 col-sm-12"><Num> 5+</Num><br />
                        <Text> Parties</Text> </Sub>
                    <Sub className="col-lg-3 col-md-3 col-sm-12"><Num> 7+</Num><br />
                        <Text> Questions </Text> </Sub>
                </Block>
            </div></Main>
    )
}

export default Numbers;