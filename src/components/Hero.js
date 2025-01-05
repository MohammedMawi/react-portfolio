import React from 'react';
import '../CSS/hero.css';
import resume from '../images/Resume.pdf';
// import '../CSS/general.css';

export default function Hero(){
  return (
    // Main 
    <div class="main">

        {/* Name and Resume */}
        <div class="info">
            <h1 class="name">Mohammed <br/> Mawi</h1>
            <a href={resume} target="_blank">
                <button class="resume">Resume</button>
            </a>
        </div>

        {/* About me */}
        <div class="about">
            <h2 class="abtext">
                Hello! I am a student in the 
                Computer Science Honours 
                program at York University. 
                <br/>
                <br/>
                I am proficient in several 
                languages and use them to 
                my advantage in personal 
                projects and in fields like web 
                development and UI/UX design, 
                among others. 
                <br/>
                <br/>
                In an effort to develop into a 
                knowledgeable and effective 
                programmer, I am constantly 
                seeking new information and 
                expanding upon my knowledge.
            </h2>
        </div>
    </div>
  );
}