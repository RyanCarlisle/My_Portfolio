import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props){
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return (<div ref={tilt} {...rest}></div>);
}

function Skills() {
    const options={
        max: 5,
        speed: 100,
        glare: true,
        "max-glare": 1
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-auto mx-auto">
                    <h1 className="skills">SKILLS</h1>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4">
                    <Tilt className="box" options={options}>
                        <div className="skills-card w-100">
                            <div className="skills-content">
                                <div className="row justify-content-center">
                                    <h1 className="mb-3 mt-2 text-center">Languages and Programming</h1>
                                    <div className="row ms-lg-4">
                                        <div className='col-4'>
                                            <ul className="text-start">
                                                <li>C</li>
                                                <li>C++</li>
                                                <li>Python</li>
                                                <li>Java</li>
                                            </ul>
                                        </div>
                                        <div className='col-4'>
                                            <ul className="text-start">
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>Javascript</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </div>

                <div className="col-lg-4 mt-4 mt-lg-0">
                    <Tilt className="box" options={options}>
                        <div className="skills-card w-100">
                            <div className="skills-content">
                                <div className="row justify-content-center">
                                        <h1 className="text-center mb-3 mt-2">Frameworks</h1>
                                        <div className="col-12 ms-4">
                                        <ul className="text-start">
                                            <li>ExpressJS</li>
                                            <li>ReactJS</li>
                                            <li>NodeJS</li>
                                            <li>Bootstrap</li>
                                        </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </div>

                <div className="col-lg-4 mt-4 mt-lg-0">
                    <Tilt className="box" options={options}>
                        <div className="skills-card w-100">
                            <div className="skills-content">
                                <div className="row justify-content-center">
                                    <h1 className="text-center mb-3">Tools</h1>
                                    <div className="col-12 ms-4">
                                        <ul className="text-start">
                                            <li>MongoDB</li>
                                            <li>Git</li>
                                            <li>Google Cloud Platform</li>
                                            <li>MySQL</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>
        </div>
    );
}

export default Skills;