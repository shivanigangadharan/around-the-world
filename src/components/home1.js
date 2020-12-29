import React from 'react';
import styled from 'styled-components';
import crowd from '../../src/images/crowd.jpg';

const BoldText = styled.div`
    font-size: 380%;
    font-weight: bold !imporant;
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
    outline: none;
    font-size: 105%;
    font-weight: 600;
    border: 1px solid white;
    margin-left: 6.5%;
`


const Wrapper = styled.div`
 min-height:calc(100vh - 30px);
 background-image: url(${crowd});
 background-size: cover;
 background-repeat: none;
 `
const Content = styled.div`
margin-bottom:80px;
`
function Home1() {
    return (
        <>

            <Wrapper className="row mx-0 align-items-center jewrapper">
                <Content className="col-12 px-0">
                    <BoldText>
                        <b>Get the latest news <br />
                            around the world</b>
                    </BoldText>

                    <Btn>

                        Read now

                        </Btn>

                </Content>
            </Wrapper>
        </>
    )
}

export default Home1;