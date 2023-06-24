import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills_Section/Skills";
import Contact from "./components/Contact";
// import project_json from "./components/projects.json" assert { type: "json" };

function App() {
  const [count, setCount] = useState(0);

  const [projects, setProjects] = useState([]);

  // Gets projects from Json file
  useEffect(() => {
    try {
      fetch("/src/components/projects.json")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          // setProjects(JSON.parse(projects));
          setProjects(data);
          console.log(data);
          console.log(typeof projects);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="about-container h-screen w-[70%] flex flex-col justify-center mx-auto mb-10">
        <Navbar />
        <About />
      </div>

      <Projects projects={projects} />
      <Skills />
      <Contact />
    </>
  );
}

export default App;