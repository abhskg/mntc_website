import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Carousel from './components/carousel';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

export default ()=>(
    <BrowserRouter>
        <Switch>
            <Route path='/' render={()=>( 
                <div>
                    <Header />
                    <Carousel />
                    <Body /> 
                    <Footer />
                </div>
            )} />
            <Route path='/event' render={()=>( 
                <div>
                    <Header />
                    <Footer />
                </div>
            )} />
        </Switch>
    </BrowserRouter>
);