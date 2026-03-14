import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="w-full p-3 md:p-4 flex items-center rounded-xl bg-gray-50/50 border border-gray-100 duration-300 cursor-pointer hover:shadow-sm max-sm:mx-auto"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`h-10 w-10 shrink-0 ${
          hover ? "bg-picto-primary" : "bg-picto-primary/10"
        } flex items-center justify-center rounded-lg transition-colors`}
      >
        <FontAwesomeIcon
          icon={item?.icon}
          className={`text-base ${
            hover ? "text-white" : "text-picto-primary"
          }`}
        />
      </div>
      <div className="ms-4 overflow-hidden">
        <p className="text-[11px] md:text-[12px] text-gray-500 font-medium uppercase tracking-wider">
          {item?.title}
        </p>
        <p className="text-base md:text-[18px] text-[#132238] font-semibold truncate">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default Address;
