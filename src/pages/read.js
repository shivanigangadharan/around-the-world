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
        fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2020-11-30&sortBy=publishedAt&apiKey=ca6d9df4624f4432b1de935cee7d0cf4')
            .then(response => response.json())
            .then(data => setData(data.articles));
    })
    const [data, setData] = useState([]);

    return (
        <Main>
            <Container>
                {data.map((e, i) => {
                    return (
                        <Card
                            title={data[i].title}
                            image={data[i].urlToImage}
                            description={data[i].description}
                        />
                    )
                })}
            </Container>
        </Main>
    )
}


export default Read;