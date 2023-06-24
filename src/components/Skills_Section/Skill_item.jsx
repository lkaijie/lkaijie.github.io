import React, { useState } from "react";

export default function Skill_item({ skill_icon, skill_language }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // console.log("clicked");
    console.log("clicked:  " + skill_language);
    // setClicked(!clicked);
  };

  return (
    <>
      <div className="group relative">
        <button
          className={`w-8 h-8 md:w-14 md:h-14 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-125 ${
            clicked ? "border bg-blue-400" : ""
          }`}
          onClick={handleClick}
        >
          <img src={skill_icon} alt="skill_icon" className="group-hover:" />
        </button>
        <div className="absolute bg-gray-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2 translate-y-[-8px] transition-opacity duration-300">
          {skill_language}
        </div>
      </div>
    </>
  );
}
