import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  // height: 6em;
  // padding: 1.5em;
  // will-change: filter;
  // transition: filter 300ms;

  return (
    <>
      <div className="about-container h-screen w-[70%] flex flex-col justify-center mx-auto">
        <Navbar />
        <About />
        {/* <div className="font-bold h-[90vh] flex justify-center align-middle mx-auto mt-0">
          sup
        </div> */}
      </div>
      {/* <div className="projects-container h-screen w-[70%] flex flex-col justify-center mx-auto">
        <div className="font-bold h-90viewport flex justify-center align-middle mx-auto mt-0">
          sup
        </div>
      </div> */}
    </>
  );
}

export default App;
