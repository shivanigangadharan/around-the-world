import React from 'react';
import styled from 'styled-components';
import crowd from '../../src/images/crowd.jpg';

const BoldText = styled.div`
    font-size: 380%;
    font-weight: bold;
    margin-left: 6.5%;
    color: white;
`
const Btn = styled.button`
    color: black;
    background: white;
    border-radius: 10px;
    margin-top: 2%;
    width:150px;
    padding: 1rem 1rem;
    font-size: 110%;
    font-weight: 500;
    border: 1px solid white;
    margin-left: 6.5%;
`


const Wrapper = styled.div`
 min-height:calc(100vh - 80px);
 background-image: url(${crowd});
 background-size: cover;
 background-repeat: none;
 `
const Content = styled.div`
margin-bottom:80px;
`
function JoinMe() {
    return (
        <>

            <Wrapper className="row mx-0 align-items-center jewrapper">
                <Content className="col-12 px-0">
                    <BoldText>
                        Join us in Building <br />
                        our Nation
                    </BoldText>
                
                        <Btn>
                            
                                Volunteer
                           
                        </Btn>
                
                </Content>
            </Wrapper>
        </>
    )
}

export default JoinMe;