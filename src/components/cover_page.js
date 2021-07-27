import React from 'react';
import smoke from './assets/smoke_SparkVideo.mp4';

function cover(){
    return (
        <div className="section">
            <div className="section">
                <video src={ smoke } className="d-none d-lg-block" autoPlay muted></video>
                <h1 className="my_name">
                    <span>B</span>
                    <span>H</span>
                    <span>U</span>
                    <span>S</span>
                    <span>W</span>
                    <span>A</span>
                    <span>R</span>
                    <span>N</span>
                    <span>A</span>
                    &nbsp;&nbsp;
                    <span>K</span>
                    <span>A</span>
                    <span>S</span>
                    <span>H</span>
                    <span>Y</span>
                    <span>A</span>
                    <span>P</span>
                </h1>
            </div>
            <div className="container">
                <div className="col-12 col-lg-6 mx-auto text-center">
                    <h3 className="fade-in-text description">Computer Science and Engineering Student at</h3>
                    <h3 className="fade-in-text description college_name mt-2">ASSAM ENGINEERING COLLEGE</h3>
                </div>
                <div className="text-center mt-5">
                    <button href="#" className="proceed-button btn btn-lg px-5 mt-5">
                        Proceed  
                        <svg aria-hidden="true" width="32px" height="32px" focusable="false" data-prefix="fas" data-icon="arrow-circle-right" class="svg-inline--fa fa-arrow-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default cover;