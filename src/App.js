import React from 'react';
import { styled } from '@material-ui/core/styles';
import Home from './Home.js';
import AppBar from '@material-ui/core/AppBar';
import { HashLink as Link } from 'react-router-hash-link';
import './App.css';
import Pdf from './img/NoraKakoResume.pdf';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const ClearBar = styled(AppBar)({
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: 3,
  boxShadow: 'none',
  color: 'black',
  height: 48,
  padding: '80px 9%',
  maxWidth: '100%',
  margin: '0',
  justifyContent: 'space-between',
});

const NavLink = styled(Link)({
  color: '#000',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '300',
  letterSpacing: "1px",
  textDecoration: 'none'
});

export default function App() {
  return (
    <Router>
      <ClearBar position="relative" id="headerBar">
        <div>Nora Kako</div>
        <div className="info">Founder and lead <br />designer at <a className="static-underline" href="https://flocksf.com" target="_blank" rel="noopener noreferrer">Flock</a></div>
        <div className="info">Based in San<br />Francisco, CA</div>
        <div className="nav">
          <a className="hover-underline" href="https://flocksf.com/work" target="_blank" rel="noopener noreferrer">Work,</a>
          <NavLink smooth to="/#contact" className="hover-underline">Contact,</NavLink>
          <a className="static-underline" href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </ClearBar>
      <Switch>
        <Route path="/">
           <Home />
        </Route>
      </Switch>
    </Router>
  );
}


