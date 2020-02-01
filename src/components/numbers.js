import React from 'react';
import styled from 'styled-components';
import stars from '../images/stars.png';

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
    background-image: url(${stars});
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