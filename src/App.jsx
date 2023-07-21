import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills_Section/Skills";
import Contact from "./components/Contact";
import project_json from "./components/projects.json";
import Footer from "./components/Footer";
import Legacy from "./components/Legacy";
// import project_json from "./components/projects.json" assert { type: "json" };
// import project_json from "./components/projects.json" assert { type: "json" };

function App() {
  const [count, setCount] = useState(0);

  const [projects, setProjects] = useState([]);

  // Gets projects from Json file
  useEffect(() => {
    try {
      // fetch("src/components/projects.json")
      // fetch(
      //   "https://raw.githubusercontent.com/lkaijie/lkaijie.github.io/sitev3_test/src/components/projects.json"
      // )
      fetch("/projects.json")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          // setProjects(JSON.parse(projects));
          setProjects(data);
          console.log(data);
          // console.log(typeof projects);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="about-container h-screen sm:w-[70%] w-[100%] flex flex-col justify-center mx-auto mb-10">
        <Navbar />
        <About />
      </div>

      {/* <Projects projects={project_json} /> */}
      <Projects projects={projects} />
      <Skills />

      <Contact />
      {/* <Legacy /> */}
      <Footer />
    </>
  );
}

export default App;
