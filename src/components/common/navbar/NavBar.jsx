import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "Experience", url: "experience" },
  { id: 3, name: "Skills", url: "skills" },
  { id: 4, name: "Projects", url: "projects" },
  { id: 5, name: "Education", url: "education" },
  { id: 6, name: "Contact", url: "contact" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const menu = navItems.map((item) => (
  <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
    <Link
      onClick={handleMenuClick}
      to={item.url.toLowerCase()}
      smooth={true}
      duration={1000}
      spy={true}
      offset={-140}
      activeClass="active"
      className="group relative hover:text-picto-primary px-5 py-3 mx-1 transition-all duration-300 cursor-pointer active:!bg-transparent active:!text-picto-primary focus:!bg-transparent focus:!text-picto-primary"
    >
      {item.name}
      <span className="absolute left-5 bottom-2.5 h-0.5 w-[calc(100%-2.5rem)] bg-picto-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
  </li>
));

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-soft-white border-b border-gray-300"
          : "bg-white border-white"
      } z-50 transition-all duration-1000`}
    >
      <style>{`
        .navbar .menu li > a.active {
          background-color: transparent !important;
          color: #9929fb !important;
        }
        .navbar .menu li > a.active span {
          transform: scaleX(1) !important;
        }
        /* Remove DaisyUI/Tailwind default active/focus backgrounds */
        .navbar .menu li > a:active, 
        .navbar .menu li > a:focus,
        .navbar .menu li > a.active:focus {
          background-color: transparent !important;
          color: #9929fb !important;
        }
      `}</style>
      <div className="navbar flex justify-between mx-auto content">
        <div className="flex items-center justify-between">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap bg-white text-black`}
            >
              {menu}
            </ul>
          </div>

          <Link
            href="#introduction"
            to={`introduction`}
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-5"
          >
            <div className="text-xl sm:text-2xl tracking-widest font-light uppercase">
              SV<span className="text-picto-primary font-black">K</span>
            </div>
          </Link>
        </div>

        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
