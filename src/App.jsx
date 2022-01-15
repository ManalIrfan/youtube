import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import "./App.css"
import Contact from "./components/contact/Contact";


const App = () => {
  return <div>
    <Intro/>
    <About/>
    <Projects/>
    <Contact/>
    </div>;
};

export default App;