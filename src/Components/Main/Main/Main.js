import React from 'react';
import {
    BrowserRouter as Router,

    Route, Switch
} from "react-router-dom";
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home/Home';
import PackagingTips from '../Pages/PackagingTips/PackagingTips';
import Prices from '../Pages/Prices/Prices';
import Requirements from '../Pages/Requirements/Requirements';
import SignUpLCD from '../Pages/SignUpLCD/SignUpLCD';
import './Main.css';

const Main = () => {
    return (
        <section>
            <Router>
                <Switch>
                    <Route exact path="/" >
                        <Home></Home>
                    </Route>
                    <Route path="/packaging-tips" >
                        <PackagingTips></PackagingTips>
                    </Route>
                    <Route path="/prices" >
                        <Prices></Prices>
                    </Route>
                    <Route path="/requirements" >
                        <Requirements></Requirements>
                    </Route>
                    <Route path="/sign-up-lcd" >
                        <SignUpLCD></SignUpLCD>
                    </Route>
                    <Route path="/contact" >
                        <Contact></Contact>
                    </Route>
                </Switch>
            </Router>
        </section>
    );
};

export default Main;