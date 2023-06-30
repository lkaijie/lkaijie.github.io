import ProjectItem from "./Project_item";
import ProjectItemTemp from "./Project_item_temp";

export default function Projects({ projects }) {
  return (
    // <>
    //   <div className="project-container align-middle">
    //     {/* <div className="project-list flex flex-row mx-10 my-10 flex-wrap justify-between"> */}
    //     <div className="grid iQiiWt">
    //       {projects.map((project) => {
    //         console.log(project);
    //         return <ProjectItem key={project["name"]} project={project} />;
    //       })}
    //     </div>
    //   </div>
    // </>

    // <>
    //   <div className="project-container">
    //     <ul className="project-list flex flex-row mx-10 my-10 flex-wrap justify-between">
    //       {projects.map((project) => {
    //         console.log(project);
    //         return <ProjectItem key={project["name"]} project={project} />;
    //       })}
    //     </ul>
    //   </div>
    // </>

    <>
      <div className="mt-[100px] sm:mt-[-200px]">
        <h1
          className="flex justify-center align-middle items-center font-SF-Pro-Bold text-2xl mx-10"
          id="projects"
        >
          Projects
        </h1>
        <div className="project-container" id="projects">
          <div className="project-list flex flex-row sm:mx-10 sm:my-10 flex-wrap justify-center items-center align-middle">
            {projects.map((project) => {
              // console.log(project);
              // return <ProjectItem key={project["name"]} project={project} />;
              return (
                <ProjectItemTemp key={project["name"]} project={project} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
