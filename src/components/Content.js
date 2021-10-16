import React from 'react';
import '../App.css';
import Background from './background';
import Experience from './Experience';
import Skills from './Skills';
import Project from './Projects';
import About from './Aboutme';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Header from './Header';

function Content() {
    return (
      <div>
          <Header/>
          <Background/>
          <About/>
          <Experience/>
          <Skills/>
          <Project/>
          <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={100}
          EasingType='easeInOutCubic'
          AnimationDuration={500}
          ContainerClassName='ScrollUpButton__Container'
          TransitionClassName='ScrollUpButton__Toggled'
          style={{}}
          ToggledStyle={{}} />
          
      </div>
    );
  }
  
  export default Content;