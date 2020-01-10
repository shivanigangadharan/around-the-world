import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
font-size: 250%;
font-weight: 500;
color: black;
width: 100%;
margin-bottom: 4%;
`
const Text = styled.div`
font-size: 115%;
width: 120%;

`
const Reach = styled.div`
font-size: 120%;
font-weight: 200;
color: black;
width: 100%;

`
const Main = styled.div`
padding-top: 3%;
@media screen and (max-width: 600px){
    padding-left: 5%;
    padding-right: 5%;
}
`
const Heading = styled.text`
    font-size: 120%;
    font-weight: 500;
`
const Input = styled.input`
    border-radius: 4px;
    border: 1px solid lightgray;
    background: ghostwhite;
    padding: 2%;
    width: 100%;
    margin-top: 2%;
`
const Submit = styled.input`
    color: white;
    background: darkblue;
    border: 1px solid darkblue;
    border-radius: 5px;
    font-size: 95%;
    padding-top: 3%;
    padding-bottom: 3%;
    padding-right: 6%;
    padding-left: 6%;
`
function Work() {
    return (

        <Main className="container">
            <div className="row justify-contents-center">
                <Line className="col-lg-4 col-sm-12 col-xs-12">
                    Work with us for a better world
                    </Line>
                <Text className="col-lg-4 col-sm-12 col-xs-12">
                    <b> Support a Parliamentarian in their responsibilities</b><br /><br />

                    It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
<br /><br /></Text>
                <Reach className="col-lg-4 col-sm-12 col-xs-12">
                    <Heading> <b>Reach out to us</b> </Heading><br /><br />
                    <form>
                        Email*<br />
                        <Input type="email" required /><br /><br />
                        Phone Number*<br />
                        <Input type="tel" required /><br /><br />
                        <Submit type="submit" value="Submit" />
                    </form>

                </Reach>

            </div></Main>


    )
}

export default Work;