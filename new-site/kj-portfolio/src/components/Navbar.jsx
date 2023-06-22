import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <div className="nav-bar flex flex-col py-3 h-[10vh]">
        <div className="nav-container flex flex-row justify-between my-2 text-xs">
          <div className="nav-content text-xl">
            <span className="font-bold hidden md:flex" id="full-name">
              Kai Jie Lee
            </span>
            <span className="font-bold block md:hidden" id="short-name">
              Kai
            </span>
          </div>
          <div className="nav-content flex justify-center items-end align-bottom">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <a
              href="assets/resume.pdf"
              // className="nav-link group mx-2 md:mx-2 font-bold flex no-underline hover:underline transition duration-300 ease-in-out"
              className="group text-sky-600 transition duration-300 ml-4"
            >
              📋 View Resume
              <FontAwesomeIcon icon={faArrowRight} className="ml-1 mt-[2px]" />
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1.5px] bg-sky-600 mt-[1px]"></span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
