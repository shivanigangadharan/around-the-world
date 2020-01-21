import React from 'react';
import styled from 'styled-components';
import mountain from '../../src/images/mountain.jpg';

const Main = styled.div`
    background: #E0E0DB;
    padding-top: 4%;
    position: relative;
    padding-bottom: 4%;
    @media screen and (max-width: 1259px){
    }
    @media screen and (max-width: 885px){
        position: static;
        padding-left: 6%;
        padding-right: 6%;
    }
    @media screen and (max-width: 700px){
        padding-top: 9%;
        padding-bottom: 12%;
    
`
const Heading = styled.text`
    font-size: 220%;
    font-weight: 600;
    color: #253551;
`
const Image = styled.img`
    width: 50%;
        margin-left: 6.5%;
    @media screen and (max-width: 1259px){
    }
    @media screen and (max-width: 885px){
        width: 65vw;
        margin-left: 0;
    }
    @media screen and (max-width: 700px){
        width: 80vw;
    }
`
const Head = styled.text`
    font-size: 200%;
    font-weight: 500;
    @media screen and (max-width: 1435px){
        font-size: 180%;
    }
    @media screen and (max-width: 1220px){
        font-size: 150%;
    }
    @media screen and (max-width: 1100px){
        font-size: 140%;
    }
    @media screen and (max-width: 959px){
       font-size: 130%;
    }
`
const TextBox = styled.div`
    background: white;
    color: #253551;
    padding: 4%;
    position: absolute; 
    z-index: 10;
    top: 29vh;
    right: 6.5%;
    width: 40vw;
    
    text-align: left;
    @media screen and (max-width: 1460px){
        top: 27vh;
    }
    @media screen and (max-width: 1259px){
        top: 25vh;
        right: 8%;
        padding-bottom: 2%;
    }
    @media screen and (max-width: 1220px){
        width: 43vw;
        top: 27vh;
    }
    @media screen and (max-width: 1102px){
        width: 50vw;
        top: 25vh;
    }
    @media screen and (max-width: 959px){
        padding: 2%;
    }
    @media screen and (max-width: 885px){
        width: 65vw;
        position: static;
    }
    @media screen and (max-width: 700px){
        width: 80vw;
    }
    
`
const Text = styled.text`
    font-size: 100%;
    font-weight: light !important;
    line-height: 200%;
    @media screen and (max-width: 1460px){
        font-size: 90%;
        line-height: 195%;
    }
    @media screen and (max-width: 1435px){
        font-size: 88%;
        line-height: 190%;
    }
    @media screen and (max-width: 959px){
        font-size: 83%;
        line-height: 185%;
    }
`
const Flex = styled.div`

@media screen and (max-width: 885px){
    display: flex;
    flex-direction: column;
    margin-left: 10vw;
}
@media screen and (max-width: 700px){
    margin-left: 4vw;
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