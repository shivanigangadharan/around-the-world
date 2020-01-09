import React from 'react';
import styled from 'styled-components';
import mountain from '../../src/images/mountain.jpg';

const Main = styled.div`
    background: lightgray;
    padding-top: 4%;
    position: relative;
    padding-bottom: 4%;
`
const Heading = styled.text`
    font-size: 220%;
    font-weight: 500;
    color: darkblue;
`
const Image = styled.img`
    width: 55%;
    height: 50%;
    margin-left: 6.5%;
    
`
const TextBox = styled.div`
    background: white;
    color: darkblue;
    padding: 4%;
    position: absolute;
    z-index: 10;
    top: 250px;
    right: 6.5%;
    width: 40%;
    font-size: 120%;
`
function Theory() {
    return (
        <Main>
            <Heading> <center>Theory of Change</center> </Heading><br />
            <Image src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
            <TextBox>Internship with Parliamentarians<br /><br />
                It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.
                 Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
                Whatever it is, the way you tell your story online can make all the difference.
                </TextBox>
        </Main>

    )
}

export default Theory;