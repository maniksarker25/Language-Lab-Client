import { Helmet } from "react-helmet-async";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import TopInstructors from "../TopInstructors/TopInstructors";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LanguageLab-Home</title>
      </Helmet>
     <Banner></Banner>
     <AboutSection/>
     <PopularClasses/>
     <TopInstructors/>
    </div>
  );
};

export default Home;
