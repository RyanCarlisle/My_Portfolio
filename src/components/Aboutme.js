import React from 'react';
import Resume from './assets/Bhuswarna_Kashyap_resume.pdf';
import "../background.css";

function About(){
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-auto mx-auto mt-5">
                    <h1 className="aboutme text-center">ABOUT ME</h1>
                    <div className="card aboutme-card">
                        <div className="content mt-4">
                            <h5>I am a Computer Science and Engineering student currently in my fourth year at Assam Engineering College, Assam, India.
                                I am a frontend developer with a good amount of knowledge in Javascript, React and Bootstrap.
                                I am also a ML and AI enthusiast. I am familiar with Google Cloud Platform.
                            </h5>
                            <div className="col-12 text-center mx-auto mt-4 mb-5">
                                <a href={Resume} target="_blank" className="resume-button btn btn-lg px-5 mt-4">
                                    View My Resume   
                                    <svg aria-hidden="true" width="32px" height="32px" focusable="false" data-prefix="fas" data-icon="arrow-circle-right" className="svg-inline--fa fa-arrow-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg>
                                </a>
                                <a href="mailto:bhuswarnakashyap@gmail.com" className="resume-button btn btn-lg px-5 mt-4">
                                    Email me
                                    <svg aria-hidden="true" width="32px" height="32px" focusable="false" data-prefix="fas" data-icon="arrow-circle-right" className="svg-inline--fa fa-arrow-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;