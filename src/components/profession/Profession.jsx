import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faReact, 
  faNodeJs, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { 
  faDatabase, 
  faServer, 
  faMobileAlt, 
  faCode, 
  faTerminal,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

const skillCategories = [
  {
    title: "Frontend",
    description: "Creating intuitive and responsive user interfaces with modern web standards.",
    icon: faCode,
    skills: [
      { name: "React JS", icon: faReact, color: "#61DAFB" },
      { name: "Next JS", icon: faReact, color: "#000000" },
      { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
      { name: "Tailwind", icon: faCss3Alt, color: "#38B2AC" },
      { name: "HTML5", icon: faHtml5, color: "#E34F26" },
      { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
    ]
  },
  {
    title: "Backend",
    description: "Developing robust server-side logic and event-driven architectures.",
    icon: faServer,
    skills: [
      { name: "Node JS", icon: faNodeJs, color: "#339933" },
      { name: "Express", icon: faServer, color: "#444" },
      { name: "Kafka", icon: faMicrochip, color: "#231F20" },
      { name: "Redis", icon: faDatabase, color: "#DC382D" },
      { name: "Docker", icon: faDocker, color: "#2496ED" },
      { name: "REST APIs", icon: faTerminal, color: "#4caf50" },
    ]
  },
  {
    title: "Mobile & Databases",
    description: "Building cross-platform apps and managing scalable data solutions.",
    icon: faDatabase,
    skills: [
      { name: "Flutter", icon: faMobileAlt, color: "#02569B" },
      { name: "MongoDB", icon: faDatabase, color: "#47A248" },
      { name: "MySQL", icon: faDatabase, color: "#4479A1" },
      { name: "Firebase", icon: faDatabase, color: "#FFCA28" },
    ]
  }
];

const SkillCategory = ({ category, index }) => {
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
      className={`pt-6 space-y-4 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Category Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-gray-100 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center bg-white shadow-sm text-picto-primary rounded-lg border border-gray-100 transition-transform duration-500 hover:rotate-12">
            <FontAwesomeIcon icon={category.icon} className="text-xl" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 tracking-tight uppercase">
              {category.title}
            </h3>
            <p className="text-gray-500 font-medium text-sm md:text-base mt-0.5 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Skills Grid - More Compact Cards */}
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
        {category.skills.map((skill, idx) => (
          <div 
            key={idx} 
            className={`group flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:border-picto-primary/20 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ 
              transitionDelay: `${idx * 100}ms` 
            }}
          >
            <div className="w-14 h-14 flex items-center justify-center bg-gray-50 rounded-md group-hover:bg-white transition-colors duration-500 shrink-0">
              <FontAwesomeIcon 
                icon={skill.icon} 
                className="text-3xl md:text-4xl transition-transform duration-500 group-hover:scale-110" 
                style={{ color: skill.color }} 
              />
            </div>
            
            <div className="flex flex-col overflow-hidden">
              <span className="text-[14px] font-semibold text-gray-800 tracking-tight group-hover:text-picto-primary transition-colors truncate">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Profession = () => {
  return (
    <div className="content pt-10 pb-8 md:pt-14 md:pb-12" id="skills">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
            Technical <span className="text-picto-primary">Proficiency</span>
          </h2>
          <div className="w-16 h-1.5 bg-picto-primary mx-auto md:mx-0 rounded-full" />
        </div>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profession;
