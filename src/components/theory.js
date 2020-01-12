import React from 'react';
import styled from 'styled-components';
import mountain from '../../src/images/mountain.jpg';

const Main = styled.div`
    background: #E0E0DB;
    padding-top: 4%;
    position: relative;
    padding-bottom: 4%;
    @media screen and (max-width: 1453px){
        position: static;
    } 
`
const Heading = styled.text`
    font-size: 220%;
    font-weight: 600;
    color: #253551;
`
const Image = styled.img`
    width: 55%;
    height: 50%;
    margin-left: 6.5%;
    @media screen and (max-width: 1453px){
        width: 60%;
        margin-left: 20%;
    }
    @media screen and (max-width: 768px){
        width: 90%;
        margin-left: 6%;
    }   
`
const Head = styled.text`
    font-size: 200%;
    font-weight: 500;
`
const TextBox = styled.div`
    background: white;
    color: #253551;
    padding: 4%;
    position: absolute; 
    z-index: 10;
    top: 235px;
    right: 6.5%;
    width: 40%;
    @media screen and (max-width: 1470px){
        top: 220px;
    }
    @media screen and (max-width: 1460px){
        top: 210px;
    }
    @media screen and (max-width: 1453px){
        position: static;
        width: 60%
        margin-left: 20%;
    }
    @media screen and (max-width: 768px){
        width: 90%;
        margin-left: 6%;
    }
`
const Text = styled.text`
    font-size: 100%;
    font-weight: light !important;
    line-height: 200%;
`
const Flex = styled.div`
@media screen and (max-width: 1453px){
    display: flex;
    flex-direction: column;
}
`
function Theory() {
    return (
        <Main>
            <Heading> <center>Theory of Change</center> </Heading><br />
            <Flex>
                <Image src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
                <TextBox> <Head><b> Internship with Parliamentarians</b></Head><br /><br />
                    <Text> It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.
                      Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
                    Whatever it is, the way you tell your story online can make all the difference.</Text>
                </TextBox>
            </Flex>
        </Main>

    )
}

export default Theory;