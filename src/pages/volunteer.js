import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
border: 2px solid #f5008f;
box-shadow: 1px 1px 15px 3px lightgrey;
border-radius: 5px;
padding: 4%;
width: 60%;
margin-top: 150px;
`
const Input = styled.input`
display: block;
border: none;
border-bottom: 2px solid #f5008f;
padding: 1%;
outline: none;
width: 50%;
color: #bf286d;
margin-top: 2%;
`
const Submit = styled.input`
margin-top: 5%
background: #bf286d;
color: white;
border-radius: 4px;
border: 2px solid white;
padding: 1%;
width: 150px;
outline: none;
box-shadow: 1px 1px 8px 2px lightgrey;
&:hover{
    background: #de3c86;
    transition-duration: 0.4s;
}
`

function Volunteer() {
    return (
        <div>
            <center>
                <Main>
                    <h3> Reach out to us! </h3>
                    <p> Fill in this short form below to register as a volunteer in our team, and one of our members will contact you with the next steps you need to follow. </p>
                    <form>
                        <Input required placeholder="Name" type="name" />
                        <Input required placeholder="Email id" type="email" />
                        <Input required placeholder="Phone number" type="text" />
                        <Submit type="submit" />

                    </form>


                </Main>


            </center>

        </div>
    )
}

export default Volunteer;