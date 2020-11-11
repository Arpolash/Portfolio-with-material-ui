import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';


function App() {
  return (
    <>
    <CssBaseline></CssBaseline>
    <Route exact path="/" component={Home}/>
    <Route path="/resume" component={Resume}/>
    <Route path="/portfolio" component={Portfolio}/>
    <Route path="/contact" component={Contact}/>

    </>
  );
}

export default App;
