import { useState, useEffect, useRef } from "react";
import Projects from "./Projects";
import Ecom from "../../assets/Ecom.png";
import OutdidProfile from "../../assets/OutdidProfile.png";
import WaterPurifier from "../../assets/WaterPurifier.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";
import EVSA from "../../assets/EVSA.png";

const projectData = [
  {
    id: 1,
    image: Ecom,
    category: "Full Stack Development",
    title: "E-Commerce Platform",
    description:
      "Developed microservice-based modules for products, orders, cart, and wishlist using Node.js, MongoDB, and Kafka.",
    link: "#!",
  },
  {
    id: 2,
    image: OutdidProfile,
    category: "Corporate Profile",
    title: "Outdid Unified Company Profile",
    description:
      "A comprehensive digital showcase highlighting the engineering expertise of our Software, Hardware, Embedded, and Mechanical teams.",
    link: "https://outdid-company.vercel.app/",
  },
  {
    id: 3,
    image: EVSA,
    category: "Full Stack Development",
    title: "EV Charging Management System (EVSA)",
    description:
      "Developed admin dashboards to monitor real-time EV charger status and operational data using React.js and REST APIs.",
    link: "#!",
  },
  {
    id: 4,
    image: WaterPurifier,
    category: "Full Stack / IoT",
    title: "Water Purifier Management System",
    description:
      "Built mobile and backend features using Flutter and Node.js, integrating BLE onboarding and MQTT for IoT device communication.",
    link: "#!",
  },

];

const Portfolio = () => {
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
      className={`content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      id="projects"
    >
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Recent <span className="text-picto-primary">Projects</span>
        </h2>
        <div className="w-16 h-1.5 bg-picto-primary mx-auto md:mx-0 rounded-full" />
        <p className="font-medium text-sm md:text-base mt-6 text-gray-500 max-w-2xl mx-auto md:mx-0 leading-relaxed">
          A showcase of my recent work, highlighting my expertise in building
          scalable architectures and user-centric interfaces.
        </p>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
