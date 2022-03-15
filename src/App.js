import React from 'react';
import { styled } from '@material-ui/core/styles';
import About from './About.js';
import Home from './Home.js';
import AppBar from '@material-ui/core/AppBar';
import { HashLink as Link } from 'react-router-hash-link';
import './App.css';

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
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row'
});

const NavLink = styled(Link)({
  color: '#000',
  fontSize: '16px',
  fontFamily: 'Lato, sans-serif',
  fontWeight: '300',
  letterSpacing: "1px",
  textDecoration: 'none',
  '&:hover': {
       color: "#820263",
    }
});

export default function App() {
  return (
    <Router>
      <ClearBar position="fixed">
        <NavLink smooth to="/#hello">NK</NavLink>
          <div className="nav">
            <NavLink to="/about">about</NavLink>
            <NavLink smooth to="/#work">work</NavLink>
            <NavLink smooth to="/#contact">contact</NavLink>
          </div>
      </ClearBar>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
           <Home />
        </Route>
      </Switch>
    </Router>
  );
}


