import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    background: #E0E0DB;
    color: #253551;
    padding: 4%;
    text-align: center;
    font-size: 210%;
    font-weight: 600;
    padding-left: 6.5%;
    padding-right: 6.5%;
    @media screen and (max-width: 700px){
        padding-left: 14%;
        padding-right: 14%;
        padding-top: 8%;
        padding-bottom: 8%;
    }
`

function SecondText() {
    return (
        <Main>
            &#8220; Information is the currency of democracy &#8221;
        </Main>
    )
}

export default SecondText;