import React from 'react';
import './App.css'
import Pricing from './Pricing';
import Album from './Album';
import Signin  from './Signin';
import SongApp from './Song/SongApp';
import Profile from './Profile';
import ReactGA from 'react-ga'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
function initizeAnalytics(){
    ReactGA.initialize('G-WWC9689KRN')
    ReactGA.pageview('/')
}
function  Match() {
    initizeAnalytics();
    return (
        <Router>
        <div className = "Match">
            {/*<Link to = "/album">歌手</Link>*/}
            <Switch>
                <Route path = "/" exact component = {Signin}/>
                <Route path = "/album" component = {Album}/>
                <Route path = "/song" component = {SongApp}/>
                <Route path = "/pricing" component = {Pricing}/>
                <Route path ="/profile" component={Profile}/>
            </Switch>

        </div>
        </Router>
    );
}



export default Match;