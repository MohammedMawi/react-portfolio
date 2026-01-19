import React, {useState, useRef} from 'react';
import '../CSS/header.css';
import githubIcon from '../images/github.png';
import linkedinIcon from '../images/linkedin.png';

export default function Header({scrollToProjects}){

  //creating a boolean state variable (default false) to show the tooltip
  const [tooltipShow, setTooltipShow] = useState(false);

  //function to copy email to clipboard
  function copyEmail(){
    //copying email to clipboard
    navigator.clipboard.writeText("mohammedmawi@gmail.com");
    //setting the tooltip to true to show 
    setTooltipShow(true);

    //setting the tooltip to false to hide after 700ms (7s)
    setTimeout(() => {
      setTooltipShow(false);
    }, 700);
  }
  
  return (
    // Header component
    <header className='header'>

      {/* Left side with Projects and Email */}
      <div className="left">
        <div className="proj" onClick={scrollToProjects}>
            <span>Projects</span>
        </div>
        
        {/* Email div with tooltip adding onClick event to copy email */}
        <div className="econtain" onClick={copyEmail}>
          <span className="email"></span>
          
          {/* If tooltipShow is true, add the "show" className to show the tooltip */}
          <div className={`tooltip ${tooltipShow ? "show" : ""}`}>
            Copied to <br/> Clipboard</div>
        </div>
      </div>

      {/* Right side with github and linkedin */}
      <div className="right">
        <div>
            <a href="https://github.com/MohammedMawi" target="_blank" >
                <img className="git" src={githubIcon} alt="GitHub"/>
            </a>

            <a href="https://www.linkedin.com/in/mohammed-mawi-581635262/" target="_blank">
                <img className="in" src={linkedinIcon} alt="LinkedIn"/>
            </a>
            
        </div>
      </div>
    </header>
  );
}