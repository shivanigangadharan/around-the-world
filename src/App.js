import React from 'react';
import styled from 'styled-components';
import Homepage from './pages/homepage';
import Navbar from './components/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Read from './pages/read';
import Volunteer from './pages/volunteer';


function App() {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/read" component={Read} />
                    <Route path="/volunteer" component={Volunteer} />

                </Switch>
            </BrowserRouter>
        </div>
    )
}


export default App;