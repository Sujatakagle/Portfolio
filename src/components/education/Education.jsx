import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faSchool, faCertificate } from "@fortawesome/free-solid-svg-icons";

const educationData = [
  {
    id: 1,
    school: "BLDEA’s Dr P G Halakatti College of Engineering and Technology",
    degree: "B.E. in Electronics and Communication Engineering",
    year: "2023",
    icon: faGraduationCap,
    location: "Vijayapur, Karnataka"
  },
  {
    id: 2,
    school: "K.L.E Society’s Basavaprabhu Kore Science College",
    degree: "Pre-University Course (PUC)",
    year: "2019",
    icon: faSchool,
    location: "Chikodi, Karnataka"
  },
  {
    id: 3,
    school: "Shantisagar Vidyapeeth English Medium School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    year: "2017",
    icon: faCertificate,
    location: "Chikodi, Karnataka"
  },
];

const EducationItem = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
      });
    }, { threshold: 0.1 });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`group relative transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-white p-8 rounded-[2rem] border-2 border-picto-primary/20 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(153,41,251,0.08)] transition-all duration-500 h-full flex flex-col items-center text-center hover:border-picto-primary/40 relative overflow-hidden">
        {/* Floating Icon Accent (Right Side) */}
        <div className="absolute top-0 right-0 p-6">
          <div className="w-12 h-12 bg-picto-primary/10 rounded-xl flex items-center justify-center text-picto-primary group-hover:scale-110 transition-transform duration-500">
            <FontAwesomeIcon icon={item.icon} className="text-xl" />
          </div>
        </div>

        {/* Floating Year Background */}
        <div className="absolute top-0 left-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <span className="text-6xl font-black text-picto-primary">
            {item.year}
          </span>
        </div>

        {/* Spacing for floating icon */}
        <div className="mb-10" />

        {/* Content Section */}
        <div className="relative z-10 flex flex-col flex-1 mt-4">
          <span className="text-picto-primary font-bold text-lg uppercase tracking-[0.2em] mb-3">
            {item.year}
          </span>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-picto-primary transition-colors duration-300 mb-1 leading-tight">
            {item.degree}
          </h3>
          <div className="mt-auto pt-4 border-t border-gray-50 group-hover:border-picto-primary/5">
            <p className="text-sm font-semibold text-gray-600 mb-2">
              {item.school}
            </p>
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">
              {item.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="content py-24 md:py-32" id="education">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Education <span className="text-picto-primary">Journey</span>
          </h2>
          <div className="w-16 h-1.5 bg-picto-primary mx-auto md:mx-0 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <EducationItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
