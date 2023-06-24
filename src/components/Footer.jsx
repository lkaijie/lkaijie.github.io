import about_img from "../assets/about_img.svg";
import githubIcon from "../assets/icon_github.svg";
import emailIcon from "../assets/icon_email.svg";
import resumeIcon from "../assets/icon_resume.svg";
import linkedinIcon from "../assets/icon_linkedin.svg";
import resume from "../assets/resume.pdf";

export default function Footer() {
  return (
    <footer className=" m-4">
      <hr className="my-6 sm:mx-auto lg:mt-8" />
      <div className="w-full max-w-screen-xl mx-auto p-2">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="mailto:leekaijie0805@gmail.com"
            className="flex items-center mb-4 sm:mb-0"
          >
            {/* <img src="" class="h-8 mr-3" alt="" /> */}
            <span className="self-center text-[1rem] font-semibold whitespace-nowrap dark:text-white">
              leekaijie0805@gmail.com
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="mx-2">
              <a
                href="https://github.com/lkaijie"
                className="mr-4 hover:underline md:mr-6 w-6 h-6 "
                target="_blank"
              >
                <img src={githubIcon} alt="profile" title="Github" />
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://www.linkedin.com/in/lkaijie/"
                className="mr-4 hover:underline md:mr-6 w-6 h-6 mx-auto"
                target="_blank"
              >
                <img src={linkedinIcon} alt="profile" title="Linkedin" />
              </a>
            </li>
            <li className="mx-2">
              <a
                href="mailto:kaijie6@ualberta.ca"
                className="mr-4 hover:underline md:mr-6 w-6 h-6 mx-auto"
              >
                <img
                  src={emailIcon}
                  className="w-6 h-6"
                  alt="profile"
                  title="Email"
                />
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        {/* <hr class="my-6 sm:mx-auto lg:my-8" /> */}
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://lkaijie.github.io/" className="hover:underline">
            {/* Kai Jie™ */}
            Kai Jie
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
