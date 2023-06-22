import about_img from "../assets/about_img.svg";
import githubIcon from "../assets/icon_github.svg";
import emailIcon from "../assets/icon_email.svg";
import resumeIcon from "../assets/icon_resume.svg";
import linkedinIcon from "../assets/icon_linkedin.svg";
import resume from "../assets/resume.pdf";

export default function About() {
  return (
    <>
      <div className="about-container flex flex-col py-3 h-[90vh]">
        <div className="about-content flex flex-col md:flex-row justify-center items-center my-16">
          <div className="about-intro w-2/4 flex flex-col mr-5">
            <h1 className="font-SF-Pro-Bold text-3xl mb-5">
              <span className="wave mr-2 delay-500 motion-reduce:animate-none">
                👋
              </span>
              Hello!
            </h1>
            <div>
              <p className="font-SF-Pro-Light text-gray-500">
                My name is <span className="text-important">Kai Jie</span>. I am
                a 4th year{" "}
                <span className="text-important">Computer Science</span> Student
                at the University of Alberta. I am a{" "}
                <span className="text-important">
                  Full-Stack Software Developer{" "}
                </span>
                that loves automation!
              </p>
            </div>
            <div className="links my-6 bg-gray-100 rounded-lg p-2 shadow-lg w-44 h-[3.3rem]">
              <ul className="flex flex-row justify-between align-middle">
                <li className="links w-[25%]">
                  <a href="https://github.com/lkaijie" target="_blank">
                    <img
                      src={githubIcon}
                      className="icon-link"
                      alt="profile"
                      title="Github"
                    />
                  </a>
                </li>
                <li className="links w-[25%]">
                  <a href={resume} alt="resume" title="Resume">
                    <img src={resumeIcon} className="icon-link" alt="profile" />
                  </a>
                </li>
                <li className="links w-[25%]">
                  <a
                    href="https://www.linkedin.com/in/lkaijie/"
                    target="_blank"
                  >
                    <img
                      src={linkedinIcon}
                      className="icon-link"
                      alt="profile"
                      title="Linkedin"
                    />
                  </a>
                </li>
                <li className="links w-[25%]">
                  <a href="mailto:kaijie6@ualberta.ca">
                    <img
                      src={emailIcon}
                      className="icon-link"
                      alt="profile"
                      title="Email"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-img w-2/4 ml-5">
            <img src={about_img} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
}
