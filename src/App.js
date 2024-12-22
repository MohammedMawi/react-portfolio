import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import flower from './images/flower.jpg';
import spikes from './images/spikes.png';
import discord from './images/Discord.png'
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
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <div class="projects">
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
    </div>
  );
}

export default App;
