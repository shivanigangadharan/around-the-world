import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/card';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50%)
`
const Main = styled.div`
    margin-top: 120px;
`
function Read() {

    useEffect(() => {
        fetch('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=yJZgih3Or8diQABgvQqkVDbACVoSVlQg')
            .then(response => response.json())
            .then(data => setData(data.results));
    }, [])
    const [data, setData] = useState([]);
    const [imag, setImag] = useState();



    return (
        <Main>
            <Container>
                {data.map((e, i) => {
                    if (data[i].multimedia == null) {
                        return (
                            <Card
                                title={data[i].title}
                                image="/"
                                description={data[i].abstract}
                            />
                        )
                    }
                    else {
                        return (
                            <Card
                                title={data[i].title}
                                image={data[i].multimedia[0].url}
                                description={data[i].abstract}
                            />
                        )
                    }
                })}
            </Container>
        </Main>
    )
}


export default Read;