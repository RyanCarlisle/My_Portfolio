import React from 'react';
import './App.css';
import Cover from './components/cover_page';
import Footer from './components/footer';
import Background from './components/background';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Project from './components/Projects';
import About from './components/Aboutme';

function App() {
  return (
    <div className="App">
      <Background/>
      <About/>
      <Experience/>
      <Skills/>
      <Project/>
    </div>
  );
}

export default App;
