export default function ProjectItem({ project }) {
  return (
    <div
      key={project["name"]}
      className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5 mx-5 overflow-hidden"
    >
      <a href="#">
        <img class="rounded-t-lg" src={project["image"]} alt="" />
      </a>
      <div className="p-5 relative">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project["name"]}
          </h5>
        </a>
        <div className="description-group absolute inset-0 overflow-hidden transition-transform">
          <div className="description-content transform translate-y-full">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project["description"]}
            </p>
            <a
              href="#"
              className="read-more-btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    // <div
    //   key={project["name"]}
    //   className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5 mx-5 overflow-hidden"
    // >
    //   <div className="p-5 relative">
    //     <a href="#">
    //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         {project["name"]}
    //       </h5>
    //     </a>
    //     <div className="description-group relative overflow-hidden">
    //       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         {project["description"]}
    //       </p>
    //       <a
    //         href="#"
    //         className="read-more-btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-transform"
    //       >
    //         Read more
    //         <svg
    //           aria-hidden="true"
    //           className="w-4 h-4 ml-2 -mr-1"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
    //             clipRule="evenodd"
    //           ></path>
    //         </svg>
    //       </a>
    //     </div>
    //   </div>
    // </div>

    // <div
    //   key={project["name"]}
    //   class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5 mx-5"
    // >
    //   <div class="p-5">
    //     <a href="#">
    //       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         {project["name"]}
    //       </h5>
    //     </a>
    //     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //       {project["description"]}
    //     </p>
    //     <a
    //       href="#"
    //       class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     >
    //       Read more
    //       <svg
    //         aria-hidden="true"
    //         class="w-4 h-4 ml-2 -mr-1"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fill-rule="evenodd"
    //           d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
    //           clip-rule="evenodd"
    //         ></path>
    //       </svg>
    //     </a>
    //   </div>
    // </div>

    // <div
    //   key={project["name"]}
    //   className="project-item mx-5 min-w-[16rem] max-w-[20rem] my-5 place-self-start"
    // >
    //   <div className="project-item-container">
    //     <a href="" className="project-link">
    //       <img src={project["image"]} alt="" className="w-full" />
    //       {project["name"]}
    //       {/* <p>{project["description"]}</p> */}
    //     </a>
    //   </div>
    // </div>

    // <li key={project["name"]} className="project-item mx-5 max-w-[15rem] my-5">
    //   <div className="project-item-container">
    //     <a href="" className="project-link">
    //       <img src={project["image"]} alt="" className="w-full" />
    //       {project["name"]}
    //       {/* <p>{project["description"]}</p> */}
    //     </a>
    //   </div>
    // </li>

    // <div key={project["name"]} className="project-item mx-5 max-w-[15rem] my-5">
    //   <div className="project-item-container">
    //     <a href="" className="project-link">
    //       <img src={project["image"]} alt="" className="w-full" />
    //       {project["name"]}
    //       {/* <p>{project["description"]}</p> */}
    //     </a>
    //   </div>
    // </div>
  );
}
