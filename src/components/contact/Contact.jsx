import { useState, useEffect, useRef } from "react";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "Bangalore, India",
  },
  {
    icon: faEnvelope,
    title: "My Email",
    description: "kaglesujata@gmail.com",
  },
  {
    icon: faPhone,
    title: "Call Me Now",
    description: "6363656840",
  },
];

const Contact = () => {
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
      className={`relative -bottom-15 -mt-15 z-10 px-2 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div
        className="content p-6 md:p-12 lg:p-20 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#132238] mb-6">
              Get In <span className="text-picto-primary">Touch</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              I’m always open to discussing new opportunities, creative projects, or 
              professional collaborations. Whether you have a question or just want 
              to say hi, I’ll do my best to get back to you!
            </p>
            <div className="space-y-4 mb-8">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
            <div className="mt-8">
              <p className="text-[#132238] font-semibold mb-4 text-lg">Follow Me</p>
              <SocialMedia />
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="bg-picto-primary/5 p-8 rounded-3xl border border-picto-primary/10 text-center max-w-md">
              <h3 className="text-2xl font-bold text-[#132238] mb-4">Open to Opportunities</h3>
              <p className="text-gray-600 mb-6">
                I'm actively looking for new professional roles and collaborations. 
                Feel free to reach out if you think I'd be a good fit for your organization.
              </p>
              <a 
                href="mailto:kaglesujata@gmail.com"
                className="inline-block bg-picto-primary text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
