import Introduction from "../components/introduction/Introduction";
import Experience from "../components/experience/Experience";
import Education from "../components/education/Education";
import Portfolio from "../components/portfolio/Portfolio";
import Profession from "../components/profession/Profession";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
        </div>
      </div>
      <div className="bg-soft-white">
        <Experience />
      </div>
      <Profession />
      <Portfolio />
      <div className="bg-soft-white">
        <Education />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
