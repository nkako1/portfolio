import React, { useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import Home from './Home.js';
import Contact from './Contact.js';
import AppBar from '@material-ui/core/AppBar';
import { HashLink as Link } from 'react-router-hash-link';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="link-arrow">
      <path d="M4 14L14 4M4 4H14V14" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

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
  useEffect(() => {
    let ticking = false;
    const mobileQuery = window.matchMedia('(max-width: 767px)');

    function updateAuraProgress() {
      if (!mobileQuery.matches) {
        document.documentElement.style.setProperty('--aura', 0);
        ticking = false;
        return;
      }
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollTop / maxScroll)) : 0;
      document.documentElement.style.setProperty('--aura', progress);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateAuraProgress);
        ticking = true;
      }
    }

    updateAuraProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    mobileQuery.addEventListener('change', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      mobileQuery.removeEventListener('change', onScroll);
    };
  }, []);

  return (
    <Router>
      <ClearBar position="relative" id="headerBar">
        <NavLink to="/" className="Name">Nora Kako</NavLink>
        <a className="hover-underline" href="https://flocksf.com/#/work" target="_blank" rel="noopener noreferrer">Work<ArrowIcon /></a>
        <a className="hover-underline" href={process.env.PUBLIC_URL + '/NoraKakoResume.pdf'} target="_blank" rel="noopener noreferrer">Resume<ArrowIcon /></a>
        <NavLink to="/contact" className="hover-underline">Contact</NavLink>
      </ClearBar>
      <Switch>
        <Route path="/contact">
           <Contact />
        </Route>
        <Route path="/" exact>
           <Home />
        </Route>
      </Switch>
    </Router>
  );
}


