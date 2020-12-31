import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
font-size: 250%;
font-weight: 700;
color: black;
width: 100%;
margin-bottom: 4%;
`
const Text = styled.div`
font-size: 115%;
width: 120%;
color: black;

`
const Reach = styled.div`
font-size: 120%;
font-weight: 200;
color: black;
width: 100%;

`
const Main = styled.div`
padding-top: 3%;
@media screen and (max-width: 700px){
    padding-left: 14%;
    padding-right: 14%;
    padding-top: 10%;
    padding-bottom: 10%;
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
    background: #253551;
    border: 1px solid #253551;
    border-radius: 5px;
    font-size: 95%;
    padding-top: 3%;
    padding-bottom: 3%;
    padding-right: 6%;
    padding-left: 6%;
`
function Work() {
    const formSubmit = (e) => {
        window.location.reload(false);
    }
    return (

        <Main className="container">
            <div className="row justify-contents-center">
                <Line className="col-lg-4 col-sm-12 col-xs-12">
                    Work with us for a better world
                    </Line>
                <Text className="col-lg-4 col-sm-12 col-xs-12">
                    <b> Support our team in their responsibilities</b><br /><br />

                    You can show your support in various ways, by joining our team, donating, being a committee member and more. Reach out to us to know more about this. Fill your email and number and one of us will contact you with all the various ways in which you can support us.
<br /><br /></Text>
                <Reach className="col-lg-4 col-sm-12 col-xs-12">
                    <Heading> <b>Reach out to us</b> </Heading><br /><br />



                    <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd29LCIXQ_WPn9xEtbiU-FE4cA_dinZxa9mcAg35KF27_3A3w/formResponse"
                        onSubmit={formSubmit} target="dummyframe"
                        method="POST" name="myform">
                        Email*<br />
                        <Input type="email" name="entry.1947384173" required /><br /><br />
                        Phone Number*<br />
                        <Input type="tel" name="entry.1929123967" required /><br /><br />
                        <Submit type="submit" value="Submit" />
                    </form>
                </Reach>

            </div>
            <iframe width="0" height="0" border="0" name="dummyframe" id="dummyframe"></iframe>
        </Main>


    )
}

export default Work;