import { useState, useEffect, useRef } from "react";
import sujata from "../../assets/sujata.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "1.4+ Y.",
  },
  {
    id: 2,
    title: "Projects",
    description: "5+",
  },
  {
    id: 3,
    title: "Location",
    description: "Bangalore",
  },
];

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
      });
    }, { threshold: 0.1 });
    
    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`flex max-lg:flex-col-reverse sm:justify-between pt-8 lg:pt-24 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-6 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Sujata Vilas Kagle
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a <span className="text-picto-primary font-bold">Full Stack Developer</span> with over 1.4 years of experience in architecting scalable web applications. I specialize in building high-performance systems using <span>React.js, Node.js, and Microservices</span>, with expertise in <span>Kafka, Redis, and MongoDB</span> to deliver robust production-ready solutions.
          </p>
          <div className="flex flex-wrap gap-4 max-lg:justify-center mb-6">
            <a
              className="btn btn-primary px-8 text-white"
              href="#contact"
            >
              Contact Me
            </a>
            <a
              className="btn bg-white border-2 border-picto-primary text-picto-primary hover:bg-picto-primary hover:text-white px-8"
              href="https://drive.google.com/file/d/1dv8DEErIT73OWR5diEK5vdbJ-1_QvPz7/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} /> Resume
            </a>
          </div>
          <div className="flex gap-6 max-lg:justify-center mb-8">
            <a href="https://www.linkedin.com/in/sujata-kagle-bb1931250" target="_blank" rel="noopener noreferrer" className="text-4xl text-picto-primary hover:opacity-80 transition-opacity">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Sujatakagle" target="_blank" rel="noopener noreferrer" className="text-4xl text-picto-primary hover:opacity-80 transition-opacity">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-96 lg:max-w-md w-full h-full max-lg:mx-auto aspect-[5/6] relative lg:-mt-10`}
      >
        <img
          className={`shadow-xl shadow-gray-200 w-full h-full object-cover bg-white rounded-3xl`}
          src={sujata}
          alt="sujata"
        />
      </div>
    </div>
  );
};

export default Introduction;
