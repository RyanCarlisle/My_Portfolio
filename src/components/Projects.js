import React from 'react';
import HTML from './assets/html5.png';
import CSS from './assets/css3.png';
import JS from './assets/javascript.png';
import MongoDB from './assets/mongoDB.png';
import ExpressJS from './assets/expressJS.png';
import ReactJS from './assets/reactJS.png';
import NodeJS from './assets/nodeJS.png';
import Unity from './assets/Unity.png';
import CSharp from './assets/CSharp.png';
import ThreeJS from './assets/threeJS.png';

function Project() {
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-auto mx-auto mt-5">
                        <h1 className="project-title">PROJECTS</h1>
                    </div>
                </div>
            </div>
            <div className="body-pr ">
                <div className="projects ">
                    <div className="">
                        <div className="Projects-box">
                            <span></span>
                            <div className="projects-content">
                                <h2>AECCC Website</h2>
                                <p><img src={HTML} width='40px' height="40px" alt="HTML" /> | 
                                    <img src={CSS} width='45px' height="45px" alt="CSS" /> | 
                                    <img src={JS} width='40px' height="40px" alt="Javascript"/> | &nbsp;
                                    <svg aria-hidden="true" width='35px' height="35px" focusable="false" data-prefix="fab" data-icon="bootstrap" className="svg-inline--fa fa-bootstrap fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="purple" d="M292.3 311.93c0 42.41-39.72 41.43-43.92 41.43h-80.89v-81.69h80.89c42.56 0 43.92 31.9 43.92 40.26zm-50.15-73.13c.67 0 38.44 1 38.44-36.31 0-15.52-3.51-35.87-38.44-35.87h-74.66v72.18h74.66zM448 106.67v298.66A74.89 74.89 0 0 1 373.33 480H74.67A74.89 74.89 0 0 1 0 405.33V106.67A74.89 74.89 0 0 1 74.67 32h298.66A74.89 74.89 0 0 1 448 106.67zM338.05 317.86c0-21.57-6.65-58.29-49.05-67.35v-.73c22.91-9.78 37.34-28.25 37.34-55.64 0-7 2-64.78-77.6-64.78h-127v261.33c128.23 0 139.87 1.68 163.6-5.71 14.21-4.42 52.71-17.98 52.71-67.12z"></path></svg>
                                </p>
                                <ul className="text-start">
                                    <li><a href="https://aecchessclub.games/" target="_blank" rel="noreferrer noopener" className="text-white">AEC Chess Club</a></li>
                                    <li>Static website built for AEC Chess Club(AECCC).</li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="Projects-box">
                            <span></span>
                            <div className="projects-content">
                                <h2>MERN Login and Authentication</h2>
                                <p><img src={MongoDB} width='80px' alt="MongoDB" /> | 
                                    <img src={ExpressJS} width='70px' alt="ExpressJS" /> | 
                                    <img src={ReactJS} width='80px' alt="ReactJS" /> | 
                                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<img src={NodeJS} width='60px' alt="NodeJS" /></p>
                                <ul>
                                    <li>Simple web application to signup and/or login.</li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="Projects-box">
                            <span></span>
                            <div className="projects-content">
                                <h2>Unity AR Project</h2>
                                <p><img src={Unity} width='65px' alt="Unity" /> | &nbsp;
                                    <img src={CSharp} width='30px' height="30px" alt="CSharp" /></p>
                                <ul>
                                    <li>
                                        A mobile app to spawn furnitures in your room to get a visual of the objects before buying them.
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="Projects-box">
                            <span></span>
                            <div className="projects-content">
                                <h2>Portfolio </h2>
                                <p><img src={ReactJS} width='80px' alt="ReactJS" /> | 
                                    <img src={ThreeJS} width='50px' alt="ThreeJS" /></p>
                                <ul>
                                    <li>
                                        This website built to showcase my abilities and my works.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;