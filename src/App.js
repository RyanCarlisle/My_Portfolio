import React from 'react';
import './App.css';
import Cover from './components/cover_page';
import Footer from './components/footer';
import Background from './components/background';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Project from './components/Projects';
import About from './components/Aboutme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Background/>
      <About/>
      <Experience/>
      <Skills/>
      <Project/>
      {/*<BrowserRouter>
        <Switch>
          <Route exact path="/" component={Cover} />
          <Route path="/my_resume" component={Resume} />
        </Switch>
        <Footer/>
      </BrowserRouter>*/}
    </div>
  );
}

export default App;
