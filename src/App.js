import './App.css';
import NavbarComponent from "./components/content/navbar/NavbarComponent.jsx";
import Header from "./components/content/header/Header.jsx";
import About from "./components/content/about/About.jsx";
import Education from "./components/content/education/education";
import Work from "./components/content/work/work";
import Contact from "./components/content/contact/contact";
import Projects from "./components/content/projects/projects";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Header></Header>
      <About></About>
      <Education></Education>
      <Work></Work>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
