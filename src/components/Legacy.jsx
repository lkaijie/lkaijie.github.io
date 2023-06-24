import timeMachine from "../assets/time-machine.png";

export default function Legacy() {
  return (
    <>
      {/* <div className="items-end bottom-0 right-0 z-50 m-4 group hidden md:flex"> */}
      {/* <div className="fixed bottom-0 right-0 z-50 m-4 group hidden md:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        </svg>
        <div className="absolute flex flex-row bg-gray-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-[80%] translate-y-[-8px] transition-opacity duration-300">
          <a
            href="../../legacy-site1/index.html"
            target="_blank"
            className="mx-2 "
          >
            Site V1
          </a>
          <a
            href="../../legacy-site/index.html"
            target="_blank"
            className="mx-2"
          >
            Site V2
          </a>
        </div>
      </div> */}
      <div className="hidden md:flex items-end justify-end group relative">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        </svg> */}
        <img src={timeMachine} alt="time-machine" className="h-6" />
        <div className="absolute bg-gray-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 bottom-full transform translate-y-[-8px] transition-opacity duration-300">
          <a
            href="../../legacy-site1/index.html"
            target="_blank"
            className="mx-2 "
          >
            Site V1
          </a>
          <a
            href="../../legacy-site/index.html"
            target="_blank"
            className="mx-2"
          >
            Site V2
          </a>
        </div>
      </div>
    </>
  );
}
