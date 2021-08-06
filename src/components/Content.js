import React from 'react';
import '../App.css';
import Background from './background';
import Experience from './Experience';
import Skills from './Skills';
import Project from './Projects';
import About from './Aboutme';

function Content() {
    return (
      <div>
          <Background/>
          <About/>
          <Experience/>
          <Skills/>
          <Project/>
      </div>
    );
  }
  
  export default Content;