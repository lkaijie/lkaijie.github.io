import { useEffect } from "react";

export default function ProjectItemTemp({ project }) {
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
    <div
      key={project.name}
      className="mx-5 my-5 border-gray-200 rounded-lg shadow-xl hidden_animation max-w-xs"
    >
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <img src={project.github_stats} alt="project" />
      </a>
    </div>
  );
}
