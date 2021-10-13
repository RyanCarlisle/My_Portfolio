import React from 'react';
import "../background.css";

function Experience(){
    return(
        <div>
            <div className="container-fluid container-ex pt-3 pb-5 px-5 mt-5">
            <h1 className="experience mb-3 text-center">EXPERIENCES</h1>
                <div className="row container-ex row-cols-lg-3 row-cols-md-2 row-cols-1 mt-5">

                    <div className="col">
                            <div className="card">
                                <div className="face face1">
                                    <div className="content">
                                        <h3>DON BOSCO SNEHALAYA, GUWAHATI</h3>
                                        <h6 className="text-white d-none d-xl-block">Hover to read more</h6>
                                        <h6 className="text-white d-block d-xl-none">Tap to read more</h6>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <div className="content text-center">
                                        <section> 
                                            SOCIAL INTERN | Jun 2019 - Jul 2019
                                            <h6 className="mt-2">Topic - Underprivileged Children</h6>
                                            <ul className="text-start">
                                                <li>Taught underprivileged children and also helped out in daily activities in this shelter.</li>
                                            </ul>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <div className="face face1">
                                    <div className="content">         
                                        <h3>PSG College of Technology, Coimbatore</h3>
                                        <h6 className="text-white d-none d-xl-block">Hover to read more</h6>
                                        <h6 className="text-white d-block d-xl-none">Tap to read more</h6>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <div className="content text-center">
                                        <section> 
                                            RESEARCH INTERN | Aug 2020 - Sept 2020
                                            <h6 className="mt-2">Topic - To develop a Deep Neural Network for Recommendation System</h6> 
                                            <ul className="text-start">
                                                <li>Tried and tested different types of models to find optimum model for recommendation systems.</li>
                                            </ul>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <div className="face face1">
                                    <div className="content">
                                        <h3>ZEPHYR SOLUTIONS</h3>
                                        <h6 className="text-white d-none d-xl-block">Hover to read more</h6>
                                        <h6 className="text-white d-block d-xl-none">Tap to read more</h6>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <div className="content text-center">
                                        <section>
                                            INTERN | Jun 2021 - Jul 2021 
                                        <h6 className="mt-1">Topic - Online Examination and Evaluation System (Web Application)</h6> 
                                        <ul className="text-start">
                                                <li>Online test taking interface.</li> 
                                                <li>It allows students to give MCQ tests and evaluates the responses against the correct answers.</li>  
                                            </ul> 
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )

}

export default Experience;