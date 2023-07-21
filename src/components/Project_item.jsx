import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function ProjectItem({ project }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting } = entry;
          if (isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.5 } // root margin can be used for preloading images/lazyloading
    );

    const hiddenElements = document.querySelectorAll(".hidden_animation");
    hiddenElements.forEach((element) => observer.observe(element));

    return () => {
      hiddenElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    // <div
    //   key={project.name}
    //   className="mx-5 my-5 border-gray-200 rounded-lg shadow-xl hidden_animation max-w-xs"
    // >
    //   <a href={project.github} target="_blank" rel="noopener noreferrer">
    //     <img src={project.github_stats} alt="project" />
    //   </a>
    // </div>
    project.show && (
      <div className="mx-5 my-5 border-gray-200 rounded-lg shadow-xl hidden_animation w-full lg:w-72 bg-gray-100">
        <div className="p-5">
          <div className="top">
            <div className="title flex">
              <img
                about="project"
                src={project.image}
                alt="project"
                className="w-14 h-14"
              />
              <div className="ml-4 my-1">
                <h1 className="font-SF-Pro-Bold">{project.name}</h1>
                <span className="font-SF-Pro-Regular text-xs flex ">
                  {/* {project.technology.map((tech) => {
                    return <p className="mr-1">{tech}</p>;
                  })} */}
                  {project.technology}
                </span>
              </div>
            </div>
            <div className="description mt-4">
              <p className="font-SF-Pro-Light text-xs">{project.description}</p>
            </div>
          </div>
          <div className="links mt-4">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLink} />
              </a>
            )}
            {project.youtube_demo && (
              <a
                href={project.youtube_demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
          </div>
        </div>
      </div>
    )
  );
}
