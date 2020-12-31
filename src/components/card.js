import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    box-shadow: 1px 1px 3px 1px lightgrey;
    padding: 2%;
    display: flex;
    margin: 5%;
`
const Col = styled.div`
    margin-left: 15px;
`


function Card(props) {

    return (
        <Main>
            <img width=" 100px" src={props.image} />
            <Col>
                <b> {props.title} </b><br />
                {props.description}

            </Col>
        </Main>
    )
}


export default Card;