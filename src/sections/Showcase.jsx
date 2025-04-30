import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}/images/project1.png`}
                alt="Ryde App Interface"
              />
            </div>
            <div className="text-content">
              <h2>
                Empowering Farmers with Direct Market Access through CropChain
              </h2>
              <p className="text-white-50 md:text-xl">
                A full-stack platform built with React, Redux, Express, and
                MongoDB to connect farmers directly with consumers and
                retailers.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src={`${import.meta.env.BASE_URL}/images/project2.png`}
                  alt="Library Management Platform"
                />
              </div>
              <h2>Student Concession Managment App</h2>
              <p className="text-white-50">
                A full-stack web application designed to digitize and streamline
                student concession card applications.
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img
                  src={`${import.meta.env.BASE_URL}/images/project3.png`}
                  alt="YC Directory App"
                />
              </div>
              <h2>Concurso '24</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Showcase;
