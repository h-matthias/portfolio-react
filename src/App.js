import Header from "./components/Header/Header";
import HomeHero from "./components/HomeHero/HomeHero";
import Skill from "./components/Skill/Skill";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import './App.css'

function App() {
  return (
    <div className="App">
        <Header />
        <HomeHero />
        <Skill />
        <Project />
        <Contact />
    </div>
  );
}

export default App;
