import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const experienceData = [
  {
    id: 1,
    company: "Outdid Unified Pvt Ltd, Bangalore, India",
    role: "Full Stack Developer",
    period: "Oct 2024 – Present",
    description: "Developed microservice-based backend modules using Node.js, MongoDB, and Kafka. Built responsive frontends with React.js and Next.js. Integrated Razorpay and improved API performance using Redis caching.",
  },
  {
    id: 2,
    company: "MindStay Technology Pvt Ltd, Bangalore, India",
    role: "Software Developer Intern",
    period: "Jul 2024 – Aug 2024",
    description: "Developed dashboards and backend APIs for a job and training portal using React.js and Node.js.",
  },
];

const ExperienceItem = ({ item, index }) => {
  const isEven = index % 2 === 0;
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
      className={`relative mb-12 last:mb-0 flex flex-col md:flex-row items-center w-full transition-all duration-1000 ${
        isEven ? "md:flex-row-reverse" : ""
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Central Icon (Desktop) */}
      <div className={`hidden md:flex absolute left-1/2 top-0 w-12 h-12 rounded-full bg-white shadow-[0_0_15px_rgba(153,41,251,0.2)] border-2 border-picto-primary z-20 -translate-x-1/2 items-center justify-center text-picto-primary transition-all duration-700 delay-300 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
        <FontAwesomeIcon icon={faBriefcase} className="text-lg" />
      </div>
      
      {/* Mobile Icon (Left) */}
      <div className={`md:hidden absolute left-4 top-0 w-10 h-10 rounded-full bg-white shadow-md border-2 border-picto-primary z-20 -translate-x-1/2 flex items-center justify-center text-picto-primary transition-all duration-700 delay-300 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
        <FontAwesomeIcon icon={faBriefcase} className="text-sm" />
      </div>
      
      {/* Content Card container with Scroll Animation */}
      <div 
        className={`w-full md:w-[45%] ${isEven ? "md:ps-10" : "md:pe-10"} ps-12 md:ps-0 transition-all duration-1000 delay-150 ${
          isVisible 
            ? "translate-x-0 opacity-100" 
            : (isEven ? "translate-x-20 opacity-0" : "-translate-x-20 opacity-0")
        }`}
      >
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_5px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_10px_40px_rgba(153,41,251,0.1)] transition-all duration-300">
          <div className="flex flex-col gap-1 mb-4">
            <span className="text-picto-primary font-bold text-xs uppercase tracking-widest px-3 py-1 bg-picto-primary/10 rounded-full self-start">
              {item?.period}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">
              {item?.role}
            </h3>
            <p className="text-base font-semibold text-gray-500">
              {item?.company}
            </p>
          </div>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {item?.description}
          </p>
        </div>
      </div>
      
      {/* Empty space for desktop */}
      <div className="hidden md:block md:w-[45%]" />
    </div>
  );
};

const Experience = () => {
  return (
    <div className="content pt-8 pb-8 md:pt-12 md:pb-12" id="experience">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Experience
        </h2>
        <div className="w-16 h-1.5 bg-picto-primary mx-auto rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto relative px-4">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 w-[3px] h-full bg-gray-100 -translate-x-1/2 rounded-full overflow-hidden">
          <div className="w-full h-full bg-picto-primary/20" />
        </div>
        
        <div className="flex flex-col relative z-10">
          {experienceData.map((item, index) => (
            <ExperienceItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Experience;
