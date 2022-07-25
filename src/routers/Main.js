import React from 'react'
import { LoginScreen } from '../components/login/LoginScreen';
import {BrowserRouter as Router,  Switch, Route  } from "react-router-dom";
import { Internal } from './Internal';
import { useMediaQuery } from 'react-responsive';

export const Main = (props) => {
    let params = {}
    params.history = props.histoy;
    params.sizeScreen = ( useMediaQuery({ minWidth: 1824 }) )? {sizeScreen:"isBigDesktop"}:"";
    params.sizeScreen = ( useMediaQuery({ minWidth: 1224 }) && params.sizeScreen === "")? "isDesktop":params.sizeScreen;
    params.sizeScreen  = ( useMediaQuery({ minWidth: 992 }) && params.sizeScreen === "")? "isSmallDesktop":params.sizeScreen;
    params.sizeScreen  = ( useMediaQuery({ minWidth: 768, maxWidth: 991 }) && params.screen === "")? {sizeScreen:"isTablet"}:params.sizeScreen;
    params.sizeScreen  = ( useMediaQuery({ maxWidth: 767 }) && params.sizeScreen === "")? "isMobile":params.sizeScreen;
    params.sizeScreen  = ( useMediaQuery({ minWidth: 768 }) && params.sizeScreen === "")? "isDafault":params.sizeScreen; 

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={ LoginScreen }/>
                    <Route path="/" render={props => <Internal params={params} />} />
                </Switch>
            </div>
        </Router>
    )
}
