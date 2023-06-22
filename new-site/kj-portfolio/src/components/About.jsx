import about_img from "../assets/about_img.svg";

export default function About() {
  return (
    <>
      <div className="about-container flex flex-col py-3 h-[90vh]">
        <div className="about-content flex flex-col md:flex-row justify-center items-center my-16">
          <div className="about-intro w-2/4 flex flex-col mx-5">
            <h1 className="font-SF-Pro-Bold text-3xl mb-5">
              <span>👋</span>
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
            <div className="links my-6">
              <ul className="flex flex-row justify-center">
                <li className="links">1</li>
                <li className="links">2</li>
                <li className="links">3</li>
                <li className="links">4</li>
              </ul>
            </div>
          </div>
          <div className="about-img w-2/4 mx-5">
            <img src={about_img} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
}
