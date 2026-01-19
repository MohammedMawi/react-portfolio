import { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import flower from './images/flower.jpg';
import spikes from './images/spikes.png';
import discord from './images/Discord.png';
import graph from './images/graph.jpg';
import house from './images/house.jpg';
import './CSS/general.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
  const titleRef = useRef(null);

  const scrollToProjects = () => {
    titleRef.current.scrollIntoView({ behavior: 'smooth' }); // Use the ref to scroll
  };

  return (
    <div className="App">
      <Header scrollToProjects={scrollToProjects}/>
      <Hero />
      <Skills />
      
      <>
        <div className="contain">
          <span className="title" ref={titleRef}>My Projects</span>
        </div>

        <div className="projects">
        <Projects 
          name = "Data Analyzer"
          link="https://github.com/MohammedMawi/Data-Analyzer"
          pic = {`${graph}`}
          language = "React/Flask"
          description = "Full-stack data analysis tool that allows users to upload CSV datasets and interactively explore statistics, correlations, and visualizations"
        />

        <Projects 
          name = "House Price Predictor"
          link="https://github.com/MohammedMawi/House-Price-Predictor/tree/main"
          pic = {`${house}`}
          language = "Python"
          description = "Developed a regression model to predict house prices using structured housing data."
        />

          <Projects 
            name = "Live Flower"
            link="https://github.com/MohammedMawi/Live-Flower-Interactive-Arduino-Project"
            pic = {`${flower}`}
            language = "C++"
            description = "A collaborative project creating a dynamic flower utilizing Arduino Uno and its components"
          />

          <Projects 
            name = "Don't Touch The Spikes"
            link="https://github.com/MohammedMawi/Dont-Touch-The-Spikes"
            pic = {`${spikes}`}
            language = "Java"
            description = "Remake of Ketchapp's mobile game 'Don't Touch The Spikes' using Java and Processing libraries"
          />

          <Projects 
            name = "Discord Bot"
            link="https://github.com/MohammedMawi/Discord-Bot"
            pic = {`${discord}`}
            language = "Python"
            description = "Custom interactive Discord bot to give using Python and the Discord API"
          />
        </div>
      </>
      


    </div>
  );
}

export default App;
