import Skill_item from "./Skill_item";

export default function Skills() {
  return (
    <>
      <div className="my-20">
        <h1
          className="flex justify-center align-middle items-center font-SF-Pro-Bold text-2xl"
          id="Skills"
        >
          Skills
        </h1>
        <div className="skills-container flex flex-col justify-center items-center mx-auto my-10 bg-gray-100 rounded-lg p-2 shadow-lg max-w-2xl">
          <div className="skill-type flex mx-5 my-5">
            <h3 className="skill-type-name font-Space-Grotesk-VariableFont_wght">
              Front-End:{" "}
            </h3>
            <div className="skill-list flex space-x-4 mx-5">
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                skill_language="React"
                key={"React"}
              />
              {/* <Skill_item
              skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
              skill_language="Next.js"
              key={"Next.js"}
            /> */}
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                // skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                skill_language="TailwindCSS"
                key={"TailwindCSS"}
              />
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                skill_language="HTML5"
                key={"HTML5"}
              />
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                skill_language="CSS3"
                key={"CSS3"}
              />
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                skill_language="JavaScript"
                key={"JavaScript"}
              />
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                skill_language="TypeScript"
                key={"TypeScript"}
              />
            </div>
          </div>
          <div className="skill-type flex mx-5 my-5">
            <h3 className="skill-type-name font-Space-Grotesk-VariableFont_wght">
              Back-End:{" "}
            </h3>
            <div className="skill-list flex space-x-4 mx-5">
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
                skill_language="Python"
                key={"Python"}
              />
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
                skill_language="Java"
                key={"Java"}
              />
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                skill_language="C"
                key={"C"}
              />
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                skill_language="Node.js"
                key={"Node.js"}
              />
              {/* <Skill_item
              skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
              skill_language="Express.js"
              key={"Express.js"}
            /> */}

              {/* django */}
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
                skill_language="Django"
                key={"Django"}
              />
              {/* firebase */}
            </div>
          </div>
          <div className="skill-type flex mx-5 my-5">
            <h3 className="skill-type-name font-Space-Grotesk-VariableFont_wght">
              Database:{" "}
            </h3>
            <div className="skill-list flex space-x-4 mx-5">
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
                skill_language="Firebase"
                key={"Firebase"}
              />
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                skill_language="MySQL"
                key={"MySQL"}
              />
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                skill_language="MongoDB"
                key={"MongoDB"}
              />
            </div>
          </div>
          <div className="skill-type flex mx-5 my-5">
            <h3 className="skill-type-name font-Space-Grotesk-VariableFont_wght">
              Tools:{" "}
            </h3>
            <div className="skill-list flex space-x-4 mx-5">
              {/* android studio */}
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original-wordmark.svg"
                skill_language="Android Studio"
                key={"Android Studio"}
              />
              {/* git */}
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                skill_language="Git"
                key={"Git"}
              />
              {/* github */}
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                skill_language="Github"
                key={"Github"}
              />
              {/* linux */}
              <Skill_item
                skill_icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                skill_language="Linux"
                key={"Linux"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
