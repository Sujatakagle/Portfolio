import { faArrowRight, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <a 
      href={data?.link} 
      target={data?.link !== "#!" ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="max-w-sm rounded-2xl bg-white border border-gray-100 overflow-hidden group block transition-all duration-300 hover:border-picto-primary/20"
    >
      {data?.image ? (
        <div className="overflow-hidden aspect-[16/10] bg-gray-50 flex items-center justify-center p-2">
          <img 
            src={data?.image} 
            alt={`${data?.title} image`} 
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex flex-wrap gap-4 p-4 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-picto-primary rounded-full" />
            ))}
          </div>
          <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-picto-primary mb-4 relative z-10">
            <FontAwesomeIcon icon={faLaptopCode} className="text-xl" />
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest relative z-10">
            Preview Coming Soon
          </p>
        </div>
      )}
      <div className="px-5 pb-5 pt-3 md:px-6 md:pb-6 md:pt-4">
        <p className="text-picto-primary text-[10px] font-bold uppercase tracking-widest mb-2">{data?.category}</p>
        <h3 className="text-gray-900 text-lg md:text-xl font-bold mb-3 group-hover:text-picto-primary transition-colors duration-300 flex items-center justify-between gap-2">
          {data?.title}
          <FontAwesomeIcon 
            icon={faArrowRight} 
            className="text-xs text-picto-primary/40 group-hover:text-picto-primary transition-all duration-300" 
          />
        </h3>
        <p className="text-gray-500 text-sm md:text-[14px] leading-relaxed line-clamp-3">
          {data?.description}
        </p>
      </div>
    </a>
  );
};

export default Projects;
